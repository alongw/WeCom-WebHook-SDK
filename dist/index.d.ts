import type { InitWeComOptions, WeComMessagePayloadMap } from './types';
/**
 * 企业微信机器人消息发送器
 * 文档参考：https://developer.work.weixin.qq.com/document/path/91770
 */
export declare class WeCom {
    #private;
    constructor(config: InitWeComOptions);
    /**
     * Send WeCom message
     * @param msgtype Message type
     * @param options Message options
     * @see https://developer.work.weixin.qq.com/document/path/91770
     */
    sendWeComMessage<T extends keyof WeComMessagePayloadMap>(msgtype: T, options: WeComMessagePayloadMap[T]): Promise<{
        status: any;
        msg: any;
        data?: undefined;
    } | {
        status: number;
        msg: string;
        data: {
            error: unknown;
        };
    }>;
}
