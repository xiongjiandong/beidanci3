import { useState } from 'react'
import { Crown, Check, Zap, Star, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

declare global {
  interface Window {
    paypal?: any
  }
}

// Subscription plans - USD pricing
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
    paypalPlanId: 'P-MONTHLY-PLAN-ID',
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
    paypalPlanId: 'P-YEARLY-PLAN-ID',
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
    paypalPlanId: 'P-LIFETIME-PLAN-ID',
    popular: false
  }
]

export function SubscribePage() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleSubscribe = async (planId: string, paypalPlanId: string) => {
    setLoading(planId)

    if (!window.paypal) {
      alert('PayPal is temporarily unavailable. Please try again later.')
      setLoading(null)
      return
    }

    try {
      console.log('Subscribing to plan:', planId, 'PayPal Plan ID:', paypalPlanId)
      alert('Subscription is being configured. Please contact support to complete your subscription.')
    } catch (error) {
      console.error('Subscription failed:', error)
      alert('Subscription failed. Please try again later.')
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center py-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Crown className="h-8 w-8 text-yellow-500" />
          <h1 className="text-3xl font-bold">Upgrade to Premium</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Unlock all word root learning features for a better learning experience
        </p>
      </div>

      {/* Member Benefits */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
          <Zap className="h-5 w-5 text-yellow-500" />
          <span className="text-sm">Unlimited Learning</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
          <Star className="h-5 w-5 text-yellow-500" />
          <span className="text-sm">Progress Sync</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
          <Shield className="h-5 w-5 text-yellow-500" />
          <span className="text-sm">Ad-free</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
          <Crown className="h-5 w-5 text-yellow-500" />
          <span className="text-sm">Premium Support</span>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                  Most Popular
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
                {loading === plan.id ? 'Processing...' : 'Subscribe Now'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Payment Method */}
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

      {/* FAQ */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">How do I cancel my subscription?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              You can cancel your subscription anytime in your PayPal account. Cancellation takes effect at the end of the current billing period.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Do you offer refunds?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Yes, you can request a full refund within 7 days of purchase. Please contact support to process your refund.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">When will my benefits be activated?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Benefits are activated immediately after successful payment. All features will be available right away.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">What if I have issues?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Please contact our support team at support@xjd123.com. We will respond within 24 hours.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
