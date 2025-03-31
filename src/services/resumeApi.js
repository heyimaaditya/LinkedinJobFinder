// src/services/resumeApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const resumeApi = createApi({
  reducerPath: 'resumeApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    parseResume: builder.mutation({
      query: (data) => ({
        url: 'parse-resume',
        method: 'POST',
        body: data,
      }),
    }),
    analyzeJobDescription: builder.mutation({
      query: (jobDesc) => ({
        url: 'analyze-job-description',
        method: 'POST',
        body: { jobDescription: jobDesc },
      }),
    }),
    getTemplates: builder.query({
      query: () => 'templates',
    }),
    generateResume: builder.mutation({
      query: (data) => ({
        url: 'generate-resume',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useParseResumeMutation, useAnalyzeJobDescriptionMutation, useGetTemplatesQuery, useGenerateResumeMutation } = resumeApi;