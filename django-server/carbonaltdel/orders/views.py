from django.shortcuts import render
from .models import Order, OrderItem
from .serializers import OrderSerializer
from products.models import Product
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def my_orders(request):
    orders = Order.objects.filter(customer=request.user)
    serializer = OrderSerializer(orders, many=True) 
    return Response(serializer.data)
