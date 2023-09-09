from django.contrib import admin
from items.models import Item

class Items(admin.ModelAdmin):
    list_display = ['id', 'name', 'qtd', 'category','description', 'date_cads']
    list_display_links = ['name', 'qtd','category','description']
    search_fields = ['id', 'name', 'category', 'date_cads']
    list_per_page = 10

admin.site.register(Item, Items)