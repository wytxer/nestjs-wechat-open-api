import { Injectable, Inject } from '@nestjs/common'
import { IWechatPayConfig, WechatPay } from 'wechat-open-api'

import { WECHAT_PAY_OPTIONS } from './wechat.constants'

@Injectable()
export class WechatPayService extends WechatPay {
  constructor(@Inject(WECHAT_PAY_OPTIONS) readonly config: IWechatPayConfig) {
    super(config)
  }
}
