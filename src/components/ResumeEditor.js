import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder'; 
import { useParseResumeMutation } from '../services/resumeApi';
import { TextField } from '@mui/material';

function ResumeEditor() {
  const [jobDescription, setJobDescription] = useState('');
  const [parseResume] = useParseResumeMutation();

  // Configure Tiptap editor with a placeholder extension
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Your resume content here...',
      }),
    ],
    // Start with empty content so the placeholder is visible
    content: '',
  });

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      await parseResume({ resumeFile: file, jobDescription });
    }
  };

  // Configure the Dropzone
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div style={{ padding: '20px', backgroundColor: '#F4F5F7', margin: '10px' }}>
      {/* Blue box for file upload */}
      <div
        {...getRootProps()}
        style={{
          backgroundColor: '#2E5BFF',
          padding: '20px',
          textAlign: 'center',
          marginBottom: '20px',
          cursor: 'pointer',
          color: '#fff',
          borderRadius: '4px',
        }}
      >
        <input {...getInputProps()} />
        
        <p style={{ margin: 0 }}>Upload File</p>
      </div>

      {/* Job Description text area with a placeholder */}
      <TextField
        label="Job Description"
        placeholder="Enter the job description here..."
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        sx={{ marginBottom: '20px' }}
      />

      {/* Tiptap Editor with a placeholder extension */}
      <EditorContent
        editor={editor}
        style={{ border: '4px solid #E0E0E0', padding: '10px', borderRadius: '4px' }}
      />
    </div>
  );
}

export default ResumeEditor;
