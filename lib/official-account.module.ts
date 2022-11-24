import { DynamicModule, Module } from '@nestjs/common'
import { IWechatConfig } from 'wechat-open-api'

import { IWechatAsyncOptions } from './wechat.interface'
import { WECHAT_OFFICIAL_ACCOUNT_OPTIONS } from './wechat.constants'
import { WechatOfficialAccountService } from './official-account.service'

@Module({})
export class WechatOfficialAccountModule {
  public static forRoot(options: IWechatConfig): DynamicModule {
    return {
      module: WechatOfficialAccountModule,
      providers: [
        {
          provide: WECHAT_OFFICIAL_ACCOUNT_OPTIONS,
          useValue: options
        },
        WechatOfficialAccountService
      ],
      exports: [WechatOfficialAccountService]
    }
  }

  public static forRootAsync(options: IWechatAsyncOptions): DynamicModule {
    return {
      module: WechatOfficialAccountModule,
      imports: options.imports || [],
      providers: [this.createAsyncOptions(options), WechatOfficialAccountService],
      exports: [WechatOfficialAccountService]
    }
  }

  private static createAsyncOptions = (options: IWechatAsyncOptions) => ({
    provide: WECHAT_OFFICIAL_ACCOUNT_OPTIONS,
    useFactory: options.useFactory,
    inject: options.inject
  })
}
