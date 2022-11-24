from django.urls import path, include
from products import views

urlpatterns = [
    path('latest-products/', views.LatestProductsList.as_view()),
    path('products/<slug:category_slug>/<slug:product_slug>/', views.ProductDetail.as_view()),
    path('products/', views.ProductList.as_view()),
    path('categories/<slug:category_slug>/', views.CategoryDetail.as_view()),
]
