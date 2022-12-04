from django.urls import path
from .views import my_orders
app_name = 'orders'

urlpatterns = [
    path('my_orders/', my_orders, name='my_orders'),
]
