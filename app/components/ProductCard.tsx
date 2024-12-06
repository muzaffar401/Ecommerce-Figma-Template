import { Heart, Eye } from 'lucide-react'
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"

interface ProductCardProps {
  name: string
  price: number
  originalPrice: number
  discount?: number
  rating: number
  reviews: number
  image: string
  isNew?: boolean
}

export function ProductCard({
  name,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  image,
  isNew
}: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden w-72 mx-auto sm:w-full">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          {discount && (
            <Badge variant="destructive" className="absolute top-2 left-2 z-10">
              -{discount}%
            </Badge>
          )}
          {isNew && (
            <Badge variant="default" className="absolute bg-brandPrimary text-white rounded-none top-2 left-2 z-10">
              NEW
            </Badge>
          )}
          <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
            <Button size="icon" variant="secondary" className="rounded-full">
              <Heart size={100} /> {/* Set size explicitly */}
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full">
              <Eye size={100} /> {/* Set size explicitly */}
            </Button>
          </div>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-sm mb-1">{name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
            )}
          </div>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}
              >
                ★
              </span>
            ))}
            <span className="text-sm text-muted-foreground">({reviews})</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
