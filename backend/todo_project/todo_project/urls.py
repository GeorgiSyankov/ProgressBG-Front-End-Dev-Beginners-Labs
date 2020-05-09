from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
  path('todos/', include('todo_app.urls')),
  path('apis/v1/', include('apis.urls')),
  path('admin/', admin.site.urls),
]
