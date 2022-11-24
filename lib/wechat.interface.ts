import { ModuleMetadata } from '@nestjs/common/interfaces'
import { IWechatConfig } from 'wechat-open-api'

export interface IWechatAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  inject: any[]
  useFactory: (...args: any[]) => IWechatConfig
}
