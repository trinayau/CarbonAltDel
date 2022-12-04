from django.urls import path
from .views import my_orders, create_order, get_order
app_name = 'orders'

urlpatterns = [
    path('my_orders/', my_orders, name='my_orders'),
    path('get_order/<str:pk>/', get_order, name='get_order'),
    path('create_order/', create_order, name='create_order'),
]
