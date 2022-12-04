from django.db import models
from django.contrib.auth import get_user_model
# import product
from products.models import Product

User = get_user_model()
# Create your models here.
class Order(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
    # add array of products:
    products = models.ManyToManyField(Product, through='OrderItem')
    date_ordered = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"<Order by {self.customer.first_name} of id {self.customer.id}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"<OrderItem of {self.product.name} by {self.order.customer.first_name}>"
