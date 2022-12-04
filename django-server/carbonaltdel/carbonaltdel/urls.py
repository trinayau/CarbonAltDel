from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.api.urls')),
    path('api/v1/', include('products.urls')),
    path('api/user/', include('users.urls', namespace='users')),
    path('api/orders/', include('orders.urls', namespace='orders')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
