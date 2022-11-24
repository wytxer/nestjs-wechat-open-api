import { Injectable, Inject } from '@nestjs/common'
import { IWechatConfig, WechatApp } from 'wechat-open-api'

import { WECHAT_APP_OPTIONS } from './wechat.constants'

@Injectable()
export class WechatAppService extends WechatApp {
  constructor(@Inject(WECHAT_APP_OPTIONS) readonly config: IWechatConfig) {
    super(config)
  }
}
