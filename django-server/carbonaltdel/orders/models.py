from django.db import models
from django.contrib.auth import get_user_model
# import product
from products.models import Product

User = get_user_model()
# Create your models here.

class OrderItem(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    @property
    def get_total(self):
        total = (self.product.price + self.product.offset) * self.quantity
        return total
    
    @property
    def get_total_emissions(self):
        total = self.product.get_carbon_emissions * self.quantity
        return total


class Order(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
    # add array of products:
    items = models.ManyToManyField(OrderItem)
    date_ordered = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"<Order by {self.customer.first_name} of id {self.customer.id}"
    
    @property
    def get_cart_total(self):
        items = self.items.all()
        total = sum([item.get_total for item in items])
        return total

