import axios from 'axios'

import type { InitWeComOptions, WeComMessagePayloadMap } from './types'

/**
 * 企业微信机器人消息发送器
 * 文档参考：https://developer.work.weixin.qq.com/document/path/91770
 */
export class WeCom {
    #wecom_key: string

    constructor(config: InitWeComOptions) {
        this.#wecom_key = config.wecom_key
    }

    /**
     * Send WeCom message
     * @param msgtype Message type
     * @param options Message options
     * @see https://developer.work.weixin.qq.com/document/path/91770
     */
    async sendWeComMessage<T extends keyof WeComMessagePayloadMap>(
        msgtype: T,
        options: WeComMessagePayloadMap[T]
    ) {
        const payload = { msgtype, ...options }
        try {
            const result = await axios.post(
                'https://qyapi.weixin.qq.com/cgi-bin/webhook/send',
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    params: {
                        key: this.#wecom_key
                    }
                }
            )
            if (result.status !== 200) {
                throw new Error(`WeCom send message failed: ${result.statusText}`)
            }
            if (result.data.errcode !== 0) {
                throw new Error(`WeCom send message failed: ${result.data.errmsg}`)
            }
            const status = result.data.errcode === 0 ? 200 : result.data.errcode
            return {
                status: status,
                msg: result.data.errmsg
            }
        } catch (error) {
            if (error instanceof Error) {
                return {
                    status: 500,
                    msg: error.message
                }
            } else {
                return {
                    status: 500,
                    msg: 'Unknown error',
                    data: {
                        error: error
                    }
                }
            }
        }
    }
}
