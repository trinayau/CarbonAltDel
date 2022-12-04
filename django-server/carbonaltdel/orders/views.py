from django.shortcuts import render
from .models import Order, OrderItem
from .serializers import OrderSerializer
from products.models import Product
from rest_framework.response import Response
from rest_framework.decorators import api_view
from twilio.rest import Client
import environ
env = environ.Env()
environ.Env.read_env()

# Twilio account credentials

client = Client(env('sid'), env('authToken'))



@api_view(['GET'])
def my_orders(request):
    orders = Order.objects.filter(customer=request.user)
    serializer = OrderSerializer(orders, many=True) 
    return Response(serializer.data)

@api_view(['GET'])
def get_order(request, pk):
    order = Order.objects.get(id=pk)
    serializer = OrderSerializer(order, many=False) 
    return Response(serializer.data)


@api_view(['POST'])
def create_order(request):
    order = Order.objects.create(customer=request.user)
    items = []
    products = request.data
    for product in products:
        product_id = product['id']
        productFound = Product.objects.get(id=product_id)
        item = OrderItem.objects.create(order=order, product=productFound, quantity = product['quantity'], customer = request.user)
        item.save()
        items.append(item)
    order.items.set(items)
    items.clear()

    order.save()
    serializer = OrderSerializer(order)
    
    # send whatsapp message
    message = client.messages.create(
    body="Your CarbonAltDel order #{} has been successfully placed, {}! Please check it out on www.carbonaltdel.tech/account".format(order.id, request.user.first_name),
    from_=env('twilioNumber'),
    to=env('myNumber')
)

    return Response(serializer.data)


