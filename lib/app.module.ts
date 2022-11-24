import { DynamicModule, Module } from '@nestjs/common'
import { IWechatConfig } from 'wechat-open-api'

import { IWechatAsyncOptions } from './wechat.interface'
import { WECHAT_APP_OPTIONS } from './wechat.constants'
import { WechatAppService } from './app.service'

@Module({})
export class WechatAppModule {
  public static forRoot(options: IWechatConfig): DynamicModule {
    return {
      module: WechatAppModule,
      providers: [
        {
          provide: WECHAT_APP_OPTIONS,
          useValue: options
        },
        WechatAppService
      ],
      exports: [WechatAppService]
    }
  }

  public static forRootAsync(options: IWechatAsyncOptions): DynamicModule {
    return {
      module: WechatAppModule,
      imports: options.imports || [],
      providers: [this.createAsyncOptions(options), WechatAppService],
      exports: [WechatAppService]
    }
  }

  private static createAsyncOptions = (options: IWechatAsyncOptions) => ({
    provide: WECHAT_APP_OPTIONS,
    useFactory: options.useFactory,
    inject: options.inject
  })
}
