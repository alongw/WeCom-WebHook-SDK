# WeCom WebHook SDK

基于 https://developer.work.weixin.qq.com/document/path/91770 封装的企业微信群机器人 SDK

A lightweight TypeScript SDK for sending messages via WeCom (WeChat Work) WebHook.

 一个轻量级的 TypeScript SDK，用于通过企业微信 WebHook 发送消息。

## Features / 特性

- Supports all types of message sending
  支持所有类型的消息发送

- Written in TypeScript with full type definitions
  基于 TypeScript 编写，提供完整的类型定义

## Quick Start / 快速开始

### Installation / 安装

```sh
npm install --save sequelize
```

### Usage / 使用示例

```typescript
import { WeCom } from 'wecom-webhook-sdk'

const wecom = new WeCom({
    wecom_key: 'your_wecom_key', // 你的企业微信群机器人的 Webhook 密钥
})

await wecom.sendWeComMessage('text',{ // 发送消息的类型，支持所有类型的消息
    text: {
        content: 'Hello, WeCom!', // 你要发送的消息内容
        mentioned_list: ['@all'], // @所有人
    }
})
```

