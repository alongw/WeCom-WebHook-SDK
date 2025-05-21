export interface InitWeComOptions {
    wecom_key: string;
}
/**
 * WeCom Text Message
 */
export type WeComTextOptions = {
    msgtype: 'text';
    text: {
        content: string;
        mentioned_list?: string[];
        mentioned_mobile_list?: string[];
    };
};
/**
 * WeCom Markdown Message
 * @markdown Max 4096 bytes, UTF-8 encoding
 */
export type WeComMarkdownOptions = {
    msgtype: 'markdown';
    markdown: {
        content: string;
    };
};
/**
 * WeCom Image Message
 * @base64 Base64-encoded image, max 2MB
 * @md5 MD5 hash of the image for verification
 */
export type WeComImageOptions = {
    msgtype: 'image';
    image: {
        base64: string;
        md5: string;
    };
};
/**
 * WeCom News Message
 * @articles Up to 8 articles
 */
export type WeComNewsOptions = {
    msgtype: 'news';
    news: {
        articles: Array<{
            title: string;
            description?: string;
            url: string;
            picurl?: string;
        }>;
    };
};
/**
 * WeCom File Message
 * @media_id File ID obtained via upload
 */
export type WeComFileOptions = {
    msgtype: 'file';
    file: {
        media_id: string;
    };
};
/**
 * WeCom Voice Message
 * @media_id Voice ID obtained via upload
 */
export type WeComVoiceOptions = {
    msgtype: 'voice';
    voice: {
        media_id: string;
    };
};
/**
 * Quote Area Types for Text Card
 */
type QuoteAreaBase = {
    title?: string;
    quote_text?: string;
};
type QuoteAreaNoAction = QuoteAreaBase & {
    type?: 0;
};
type QuoteAreaUrl = QuoteAreaBase & {
    type: 1;
    url: string;
};
type QuoteAreaMiniProgram = QuoteAreaBase & {
    type: 2;
    appid: string;
    pagepath?: string;
};
type QuoteArea = QuoteAreaNoAction | QuoteAreaUrl | QuoteAreaMiniProgram;
/**
 * Horizontal Content Types
 */
type HorizontalContentBase = {
    keyname: string;
};
type HorizontalContentUrl = HorizontalContentBase & {
    type: 1;
    value?: string;
    url: string;
};
type HorizontalContentFile = HorizontalContentBase & {
    type: 2;
    value: string;
    media_id: string;
};
type HorizontalContentUserDetail = HorizontalContentBase & {
    type: 3;
    value?: string;
    userid: string;
};
type HorizontalContent = (HorizontalContentBase & {
    type?: never;
    value?: string;
}) | HorizontalContentUrl | HorizontalContentFile | HorizontalContentUserDetail;
/**
 * Jump List Types
 */
type JumpListBase = {
    title: string;
};
type JumpListNoLink = JumpListBase & {
    type?: 0;
};
type JumpListUrl = JumpListBase & {
    type: 1;
    url: string;
};
type JumpListMiniProgram = JumpListBase & {
    type: 2;
    appid: string;
    pagepath?: string;
};
type JumpList = JumpListNoLink | JumpListUrl | JumpListMiniProgram;
/**
 * Card Action Types
 */
type CardActionUrl = {
    type: 1;
    url: string;
};
type CardActionMiniProgram = {
    type: 2;
    appid: string;
    pagepath?: string;
};
type CardAction = CardActionUrl | CardActionMiniProgram;
/**
 * WeCom Text Card Message
 */
export type WeComTextCardOptions = {
    msgtype: 'template_card';
    template_card: {
        card_type: 'text_notice';
        source?: {
            icon_url?: string;
            desc?: string;
            desc_color?: 0 | 1 | 2 | 3;
        };
        main_title: {
            title?: string;
            desc?: string;
        };
        emphasis_content?: {
            title?: string;
            desc?: string;
        };
        quote_area?: QuoteArea;
        sub_title_text?: string;
        horizontal_content_list?: HorizontalContent[];
        jump_list?: JumpList[];
        card_action: CardAction;
    };
};
/**
 * WeCom Picture Text Card Message
 */
export type WeComNewsNoticeCardOptions = {
    msgtype: 'template_card';
    template_card: {
        card_type: 'news_notice';
        source?: {
            icon_url?: string;
            desc?: string;
            desc_color?: 0 | 1 | 2 | 3;
        };
        main_title: {
            title: string;
            desc?: string;
        };
        card_image: {
            url: string;
            aspect_ratio?: 1.3 | 1.0 | 0.7;
        };
        vertical_content_list?: Array<{
            title: string;
            desc?: string;
        }>;
        horizontal_content_list?: HorizontalContent[];
        jump_list?: JumpList[];
        card_action: CardAction;
    };
};
/**
 * Union of valid message config options
 */
export type WeComMessageConfig = WeComTextOptions | WeComMarkdownOptions | WeComImageOptions | WeComNewsOptions | WeComFileOptions | WeComVoiceOptions | WeComTextCardOptions | WeComNewsNoticeCardOptions;
export type WeComMessagePayloadMap = {
    [T in WeComMessageConfig['msgtype']]: Omit<Extract<WeComMessageConfig, {
        msgtype: T;
    }>, 'msgtype'>;
};
export {};
