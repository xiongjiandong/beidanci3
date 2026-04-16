import { useState } from 'react'
import { Crown, Check, Zap, Star, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

declare global {
  interface Window {
    paypal?: any
  }
}

// 订阅计划配置 - 美元定价
const plans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$4.99',
    priceValue: 4.99,
    period: '/month',
    description: 'Best for short-term learning',
    features: [
      'Unlock all 12 categories',
      'Unlimited word root learning',
      'Unlimited quiz access',
      'Cloud sync progress',
      'Ad-free experience'
    ],
    paypalPlanId: 'P-MONTHLY-PLAN-ID', // 替换为实际的PayPal Plan ID
    popular: false
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: '$29.99',
    priceValue: 29.99,
    period: '/year',
    description: 'Most popular, save $29.89',
    features: [
      'Unlock all 12 categories',
      'Unlimited word root learning',
      'Unlimited quiz access',
      'Cloud sync progress',
      'Ad-free experience',
      'Exclusive learning reports',
      'Priority support'
    ],
    paypalPlanId: 'P-YEARLY-PLAN-ID', // 替换为实际的PayPal Plan ID
    popular: true
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    price: '$59.99',
    priceValue: 59.99,
    period: 'one-time',
    description: 'One purchase, lifetime access',
    features: [
      'Permanent full access',
      'All future updates free',
      'Exclusive VIP badge',
      '1-on-1 learning advisor',
      'Lifetime free upgrades',
      'Exclusive member group'
    ],
    paypalPlanId: 'P-LIFETIME-PLAN-ID', // 替换为实际的PayPal Plan ID
    popular: false
  }
]

export function SubscribePage() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleSubscribe = async (planId: string, paypalPlanId: string) => {
    setLoading(planId)

    // 检查PayPal SDK是否加载
    if (!window.paypal) {
      alert('PayPal服务暂时不可用，请稍后再试')
      setLoading(null)
      return
    }

    // 这里集成PayPal订阅
    // 实际使用时需要替换为你的PayPal配置
    try {
      // 模拟订阅流程
      // 实际部署时需要：
      // 1. 在后端创建PayPal订阅
      // 2. 获取订阅链接
      // 3. 跳转到PayPal完成支付

      console.log('订阅计划:', planId, 'PayPal Plan ID:', paypalPlanId)
      alert('订阅功能正在配置中，请联系客服完成订阅')
    } catch (error) {
      console.error('订阅失败:', error)
      alert('订阅失败，请稍后再试')
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* 标题区域 */}
      <div className="text-center py-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Crown className="h-8 w-8 text-yellow-500" />
          <h1 className="text-3xl font-bold">升级会员</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          解锁全部词根学习功能，让学习更高效
        </p>
      </div>

      {/* 会员权益 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
          <Zap className="h-5 w-5 text-yellow-500" />
          <span className="text-sm">无限学习</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
          <Star className="h-5 w-5 text-yellow-500" />
          <span className="text-sm">进度同步</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
          <Shield className="h-5 w-5 text-yellow-500" />
          <span className="text-sm">无广告</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
          <Crown className="h-5 w-5 text-yellow-500" />
          <span className="text-sm">专属服务</span>
        </div>
      </div>

      {/* 订阅计划 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                  最受欢迎
                </span>
              </div>
            )}
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={plan.popular ? 'default' : 'outline'}
                onClick={() => handleSubscribe(plan.id, plan.paypalPlanId)}
                disabled={loading === plan.id}
              >
                {loading === plan.id ? '处理中...' : '立即订阅'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* 支付方式说明 */}
      <div className="text-center py-8 border-t">
        <p className="text-muted-foreground text-sm mb-4">
          Secure payment via PayPal
        </p>
        <div className="flex items-center justify-center">
          <div className="px-6 py-2 bg-blue-50 dark:bg-blue-900/20 rounded text-blue-600 dark:text-blue-400 font-semibold text-sm">
            PayPal
          </div>
        </div>
      </div>

      {/* 常见问题 */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">常见问题</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">如何取消订阅？</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              您可以随时在PayPal账户中取消订阅，取消后将在当前计费周期结束后生效。
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">支持退款吗？</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              购买后7天内可申请全额退款，请联系客服处理。
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">会员权益何时生效？</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              支付成功后立即生效，所有功能即可使用。
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">遇到问题怎么办？</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              请联系客服邮箱：support@xjd123.com，我们会在24小时内回复。
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
