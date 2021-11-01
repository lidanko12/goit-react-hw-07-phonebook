import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://617ec7252ff7e600174bd8fe.mockapi.io/api/v1/'
    }),
    tagTypes :['Contact'],
    endpoints: builder => ({
        fetchContacts: builder.query({
            query: () => '/contacts',
        providesTags:['Contact'],
        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method :'DELETE',
            }),
            invalidatesTags :['Contact'],
        }),
        createContact: builder.mutation({
            query: ({name,number})=> ({
                url: '/contacts',
                method: 'POST',
                body: {
                        name: name,
                        number:number,
                },
                
            }),
            invalidatesTags :['Contact'],
        }),
    }),
});

export const { useFetchContactsQuery ,useDeleteContactMutation,useCreateContactMutation } = contactsApi;