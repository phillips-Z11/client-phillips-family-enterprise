import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_URL,
  credentials: 'include',
})

export interface ContactFormData {
  firstName: string
  lastName: string
  address: string
  phone: string
  email: string
}

interface ContactFormResponse {
  success: boolean
  message: string
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    submitContactForm: builder.mutation<ContactFormResponse, ContactFormData>({
      query: (formData) => ({
        url: '/api/v1/mail/',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
})

export const { useSubmitContactFormMutation } = apiSlice
