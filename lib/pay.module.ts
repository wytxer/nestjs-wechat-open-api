import { DynamicModule, Module } from '@nestjs/common'
import { IWechatPayConfig } from 'wechat-open-api'

import { IWechatAsyncOptions } from './wechat.interface'
import { WECHAT_PAY_OPTIONS } from './wechat.constants'
import { WechatPayService } from './pay.service'

@Module({})
export class WechatPayModule {
  public static forRoot(options: IWechatPayConfig): DynamicModule {
    return {
      module: WechatPayModule,
      providers: [
        {
          provide: WECHAT_PAY_OPTIONS,
          useValue: options
        },
        WechatPayService
      ],
      exports: [WechatPayService]
    }
  }

  public static forRootAsync(options: IWechatAsyncOptions): DynamicModule {
    return {
      module: WechatPayModule,
      imports: options.imports || [],
      providers: [this.createAsyncOptions(options), WechatPayService],
      exports: [WechatPayService]
    }
  }

  private static createAsyncOptions = (options: IWechatAsyncOptions) => ({
    provide: WECHAT_PAY_OPTIONS,
    useFactory: options.useFactory,
    inject: options.inject
  })
}
