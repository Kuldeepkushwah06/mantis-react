import React from 'react';
import { useState } from 'react';

// import * as Yup from 'yup';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';

import {
  FormControl,
  MenuItem,
  Select,
} from '@mui/material';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';

// import { useMockedUser } from 'src/hooks/use-mocked-user';

// import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
} from '../extra-pages/form-provider';
import { CodeBlock, atomOneDark } from 'react-code-blocks';

import pythonIcon from '../extra-pages/languages/ic_python.svg';
import curlIcon from '../extra-pages/languages/ic_Curl.png';
import goIcon from '../extra-pages/languages/ic_go.png';
import javaScriptIcon from '../extra-pages/languages/ic_javascript.svg';
import typeScriptIcon from '../extra-pages/languages/ic_typescript.svg';
import javaIcon from '../extra-pages/languages/ic_java.svg';

// Templates
import VerifyLink_2 from '../extra-pages/VerifyLink_2';

// ----------------------------------------------------------------------

export default function SamplePage() {
  // const { enqueueSnackbar } = useSnackbar();

  // const { user } = useMockedUser();
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  // const [showLineNumbers, setShowLineNumbers] = useState(true);

  // const UpdateUserSchema = Yup.object().shape({
  //   displayName: Yup.string().required('Name is required'),
  //   email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  //   photoURL: Yup.mixed().nullable().required('Avatar is required'),
  //   phoneNumber: Yup.string().required('Phone number is required'),
  //   country: Yup.string().required('Country is required'),
  //   address: Yup.string().required('Address is required'),
  //   state: Yup.string().required('State is required'),
  //   city: Yup.string().required('City is required'),
  //   zipCode: Yup.string().required('Zip code is required'),
  //   about: Yup.string().required('About is required'),
  //   // not required
  //   isPublic: Yup.boolean(),
  // });

  // const defaultValues = {
  //   displayName: user?.displayName || '',
  //   email: user?.email || '',
  //   photoURL: user?.photoURL || null,
  //   phoneNumber: user?.phoneNumber || '',
  //   country: user?.country || '',
  //   address: user?.address || '',
  //   state: user?.state || '',
  //   city: user?.city || '',
  //   zipCode: user?.zipCode || '',
  //   about: user?.about || '',
  //   isPublic: user?.isPublic || false,
  // };

  // const methods = useForm({
  //   resolver: yupResolver(UpdateUserSchema),
  //   defaultValues,
  // });

  // const {
  //   // setValue,
  //   handleSubmit,
  //   formState: { isSubmitting },
  // } = methods;

  // const onSubmit = handleSubmit(async (data) => {
  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 500));
  //     // enqueueSnackbar('Update success!');
  //     console.info('DATA', data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // });

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const codeSnippets = {
    python: `
  # Hello world in Python 2
  print "Hello World"

  # Hello world in Python 3 (aka Python 3000)
  print("Hello World")
    `,
    javascript: `var myHeaders = new Headers();

var raw = JSON.stringify({
  "api_key": "",
  "campaign_id": "00000000-0000-0000-0000-000000000000"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.instantly.ai/api/v1/campaign/launch", 
requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    `,
    java: `
      // Hello world in Java
      public class HelloWorld {
        public static void main(String[] args) {
          System.out.println("Hello World");
        }
      }
    `,
    typescript: `
      // Hello world in TypeScript
      console.log("Hello World");
    `,
    go: `
      // Hello world in Go
      package main

      import "fmt"

      func main() {
        fmt.Println("Hello World")
      }
    `,
    curl: `
      # Hello world in cURL
      curl -X GET https://example.com
    `,
  };

  const copyBlockProps = {
    text: codeSnippets[selectedLanguage],
    language: selectedLanguage,
    // showLineNumbers,
    theme: atomOneDark,
    startingLineNumber: 1,
    wrapLines: true,
  };

  const LANGS = [
    {
      value: 'python',
      icon: pythonIcon,
    },
    {
      value: 'javascript',
      icon: javaScriptIcon,
    },
    {
      value: 'java',
      icon: javaIcon,
    },
    {
      value: 'typescript',
      icon: typeScriptIcon,
    },
    {
      value: 'go',
      icon: goIcon,
    },
    {
      value: 'curl',
      icon: curlIcon,
    },
  ];

  return (
    <FormProvider  >
      <Grid container spacing={3}>
        <Grid xs={12} md={6}>
          <Card sx={{ pt: 10, pb: 5, px: 3 }}>
            <VerifyLink_2 />
          </Card>
        </Grid>

        <Grid xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <FormControl
              sx={{
                minWidth: "100%",
                mb: 2
              }}
            >
              <Stack direction="row" alignItems="center">
                <Select value={selectedLanguage} onChange={handleLanguageChange} sx={{ width: '100%' }}>
                  {LANGS.map((lang) => (
                    <MenuItem key={lang.value} value={lang.value}>
                      <Stack direction="row" alignItems="center">
                        <img src={lang.icon} alt={lang.value} width="32" height="32" style={{ marginRight: '8px' }} />
                        {lang.value}
                      </Stack>
                    </MenuItem>
                  ))}
                </Select>
              </Stack>
            </FormControl>
            
            <CodeBlock {...copyBlockProps} />

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" >
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
