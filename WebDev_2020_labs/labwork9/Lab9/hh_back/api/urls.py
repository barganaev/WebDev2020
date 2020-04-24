from django.urls import path

from api.views import companies_list, company_detail, vacancies_by_company_list, vacancies_list, vacancy_detail, top_10_vacancies_desc_list

urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:company_id>/', company_detail),
    path('companies/<int:company_id>/vacancies/', vacancies_by_company_list),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:vacancy_id>/', vacancy_detail),
    path('vacancies/top_ten/', top_10_vacancies_desc_list)
]
