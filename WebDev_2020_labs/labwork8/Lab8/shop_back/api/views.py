from django.shortcuts import render

# Create your views here.
from  django.http.response import JsonResponse

from api.models import Product, Category


def product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe= False)


def product_detail(request, product_id):
    try:
        product = Product.objects.get(id = product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(product.to_json())


def category_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)


def category_detail(request, category_id):
    try:
        category = Category.objects.get(id = category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(category.to_json())


def product_by_category(request, fk):
    try:
        category = Category.objects.get(id = fk)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False)

    products = category.product_set.all()
    response = [product.to_json() for product in products]
    return JsonResponse(response, safe=False)


