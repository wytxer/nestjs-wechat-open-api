# NESTJS WECHAT OPEN API

基于 [wechat-open-api](https://github.com/wytxer/wechat-open-api) 封装用于 nestjs 的微信生态服务端接口


## 使用

导入模块：

```ts
import { WechatAppModule } from 'nestjs-wechat-open-api'

@Module({
  imports: [
    WechatAppModule.forRoot({ appid: '', secret: '' })
  ]
})
```

使用：

```ts
import { WechatAppService } from 'nestjs-wechat-open-api'

@Injectable()
export class UserService {
  constructor(private readonly wechatAppService: WechatAppService) {}
}
```


## 使用文档

- [微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)


## License

[MIT](/LICENSE)
