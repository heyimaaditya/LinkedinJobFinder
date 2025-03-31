import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useParseResumeMutation } from '../services/resumeApi';
import { TextField } from '@mui/material';

function ResumeEditor() {
  const [jobDescription, setJobDescription] = useState('');
  const [parseResume] = useParseResumeMutation();
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Your resume content here...</p>',
  });

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    await parseResume({ resumeFile: file, jobDescription });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div style={{ padding: '20px', backgroundColor: '#F4F5F7', margin: '10px' }}>
      <div {...getRootProps()} style={{ border: '2px dashed #2E5BFF', padding: '20px', textAlign: 'center', marginBottom: '20px' }}>
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop resume here, or click to select files</p>}
      </div>
      <TextField
        label="Job Description"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        sx={{ marginBottom: '20px' }}
      />
      <EditorContent editor={editor} style={{ border: '1px solid #E0E0E0', padding: '10px' }} />
    </div>
  );
}

export default ResumeEditor;