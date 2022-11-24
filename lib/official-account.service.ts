import { Injectable, Inject } from '@nestjs/common'
import { IWechatConfig, WechatOfficialAccount } from 'wechat-open-api'

import { WECHAT_OFFICIAL_ACCOUNT_OPTIONS } from './wechat.constants'

@Injectable()
export class WechatOfficialAccountService extends WechatOfficialAccount {
  constructor(@Inject(WECHAT_OFFICIAL_ACCOUNT_OPTIONS) readonly config: IWechatConfig) {
    super(config)
  }
}
