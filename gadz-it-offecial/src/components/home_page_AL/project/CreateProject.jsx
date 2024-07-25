import './CreateProject.css'
import projectImage from '../../../assets/asset-22-1@2x.png'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ClassNames } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CssTextField = styled(TextField)({
  '& label': {
    color: '#74767e',
  },
  '& label.Mui-focused': {
    color: 'sky',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#8102ff',
    },
    '&:hover fieldset': {
      borderColor: '#ab0cdf',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'sky',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  select: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#8102ff',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'sky',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ab0cdf !important',
    },
  }, icon: {
    fill: '#74767e !important',
  },

}));

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


const categorys = [
  'WEBSITE DEVELOPEMENT',
  'MOBILE APP DEVELOPEMENT',
  'GAME DEVELOPEMENT',
  'AI DEVELOPEMENT',
  'CHATBOT DEVELOPEMENT',
  'WEARABLE APP DEVELOPEMENT',
  'OTHER'
];

const frontProgLanguages = [
  'JavaScript',
  'TypeScript',
  'Python',
  'C&C++',
  'C#',
  'Java',
  'Swift',
  'Kotlin',
  'PHP',
  'Go',
  'MATLAB',
  'Ruby/RoR',
  'Pine Script',
  'Other'
];

const backProgLanguages = [
  'JavaScript',
  'TypeScript',
  'Python',
  'C&C++',
  'C#',
  'Java',
  'Swift',
  'Kotlin',
  'PHP',
  'Go',
  'MATLAB',
  'Ruby/RoR',
  'Pine Script',
  'Other'
];

const frontFrameworks = [
  'React.js',
  'AngularJS',
  'Vue.js',
  'jQuery',
  'Ember.js',
  'Backbone.js',
  'Svelte',
  'Preact',
  'Next.js',
  'Other'
];

const backFrameworks = [
  'Django',
  'Laravel',
  'Spring',
  'Express.js',
  'Node.js',
  'CakePHP',
  'Flask',
  'Koa',
  'Meteor.js',
  'CodeIgniter',
  'Next.js',
  'Other'
]

const types = [

  'E-COMMERCE STORE',
  'BUSINESS',
  'LANDING PAGE',
  'BLOG',
  'EDUCATION',
  'PORTFOLIO',
  'ENTERTAINMENT',
  'NONPROFIT',
  'WEDDING',
  'PODCASTING',
  'ONLINE COMMUNITIES',
  'FORMS',
  'CROWDFUNDING',
  'WIKI/KNOWLEDGE',
  'SAAS',
  'JOB BOARD',
  'PORTAL',
  'BROCHURE',
  'DROPSHIPPING',
  'OTHER'
];



function getStyles(categorys, category, theme) {
  return {
    fontWeight:
      category.indexOf(categorys) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function CreateProject() {

  const theme = useTheme();
  const [category, setCategory] = React.useState([]);
  const [frontProL, setFrontProL] = React.useState([]);
  const [otherFrontLang, setOtherFrontLang] = React.useState('');
  const [backProL, setBackProL] = React.useState([]);
  const [otherBackLang, setOtherBackLang] = React.useState('');
  const [frontFrame, setFrontFrame] = React.useState([]);
  const [otherFrontFrame, setOtherFrontFrame] = React.useState('');
  const [backFrame, setBackFrame] = React.useState([]);
  const [otherBackFrame, setOtherBackFrame] = React.useState('');
  const [websiteTypes, setWebsiteTypes] = React.useState([]);
  const [otherWebsiteTypes, setOtherWebsiteTypes] = React.useState('');
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('websiteTypes');
  const [websiteType, setWebsiteType] = React.useState('');
  const [websiteFeature, setWebsiteFeature] = React.useState('');
  const [websitePlugin, setWebsitePlugin] = React.useState('');
  const [websiteOtherFeature, setWebsiteOtherFeature] = React.useState(false);
  const [websiteOtherFeatureValue, setWebsiteOtherFeatureValue] = React.useState('')
  const [websiteOtherPlugin, setWebsiteOtherPlugin] = React.useState(false);
  const [websiteOtherPluginValue, setWebsiteOtherPluginValue] = React.useState('')


  const features = [
    { name: 'marketing', label: 'Marketing' },
    { name: 'forum', label: 'Forum' },
    { name: 'support', label: 'Customer support' },
    { name: 'inventory', label: 'Inventory' },
    { name: 'video', label: 'Video' },
    { name: 'events', label: 'Events' },
    { name: 'chat', label: 'Chat' },
    { name: 'map', label: 'Map' },
    { name: 'gallery', label: 'Gallery' },
    { name: 'calendar', label: 'Calendar' },
    { name: 'payment', label: 'Payment' },
    { name: 'media', label: 'Social media' },
    { name: 'shipping', label: 'Shipping' },
    { name: 'analytics', label: 'Analytics' },
    { name: 'form', label: 'Form' },
    { name: 'music', label: 'Music' },
    { name: 'membership', label: 'Membership' },
    { name: 'faq', label: 'FAQ' },
    { name: 'booking', label: 'Booking' },

  ];

  const plugins = [
    { name: 'youTube', label: 'YouTube' },
    { name: 'instagram', label: 'Instagram' },
    { name: 'paypal', label: 'Paypal' },
    { name: 'vimeo', label: 'Vimeo' },
    { name: 'getresponse', label: 'GetResponse' },
    { name: 'woocommerce', label: 'WooCommerce' },
    { name: 'divi', label: 'Divi' },
    { name: 'rankmath', label: 'Rank Math' },
    { name: 'mailchimp', label: 'Mailchimp' },
    { name: 'adsense', label: 'Adsense' },
    { name: 'amazon', label: 'Amazon' },
    { name: 'facebook', label: 'Facebook' },
    { name: 'twitter', label: 'Twitter' },
    { name: 'linkedIn', label: 'LinkedIn' },
    { name: 'clickbank', label: 'ClickBank' },
    { name: 'opencart', label: 'Opencart' },
    { name: 'elementor', label: 'Elementor' },
    { name: 'akismet', label: 'Akismet' },
    { name: 'gravityforms', label: 'Gravity Forms' },
    { name: 'crocoblock', label: 'Crocoblock' },

  ];

  const [stateFeatures, setStateFeatures] = React.useState(
    features.reduce((acc, checkbox) => {
      acc[checkbox.name] = false;
      return acc;
    }, {})
  );

  const [statePlugins, setStatePlugins] = React.useState(
    plugins.reduce((acc, checkbox) => {
      acc[checkbox.name] = false;
      return acc;
    }, {})
  );

  const handleChangeAlignement = (event, newAlignment) => {
    setAlignment(newAlignment);
  }

  const handleChangeCategory = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(value);
  };


  const handleChangeFrontLang = (event) => {
    const {
      target: { value },
    } = event;

    setFrontProL(value);

  };

  const handleAddOtherFrontLang = () => {
    if (otherFrontLang.trim() !== '') {
      setFrontProL(otherFrontLang);
      setOtherFrontLang('');
    }
  }


  const handleOtherFrontLang = (event) => {
    setOtherFrontLang(event.target.value);
  };

  const handleOtherFrontFrame = (event) => {
    setOtherFrontFrame(event.target.value);
  };

  const handleChangeBackLang = (event) => {
    const {
      target: { value },
    } = event;
    setBackProL(value);
  };

  const handleOtherBackLang = (event) => {
    setOtherBackLang(event.target.value);
  };

  const handleAddOtherBackLang = () => {
    if (otherBackLang.trim() !== '') {
      setBackProL(otherBackLang);
      setOtherBackLang('');
    }
  }

  const handleChangeFrontFramework = (event) => {
    const {
      target: { value },
    } = event;
    setFrontFrame(value);

  };

  const handleOtherBackFrame = (event) => {
    setOtherBackFrame(event.target.value);
  };

  const handleAddOtherFrontFrame = () => {
    if (otherFrontFrame.trim() !== '') {
      setFrontFrame(otherFrontFrame);
      setOtherFrontFrame('');
    }
  }

  const handleChangeBackFramework = (event) => {
    const {
      target: { value },
    } = event;
    setBackFrame(value);
  };

  const handleAddOtherBackFrame = () => {
    if (otherBackFrame.trim() !== '') {
      setBackFrame(otherBackFrame);
      setOtherBackFrame('');
    }
  }

  const handleChangeWebsiteTypes = (event) => {
    const {
      target: { value },
    } = event;
    setWebsiteTypes(value);
  };

  const handleOtherWebsiteTypes = (event) => {
    setOtherWebsiteTypes(event.target.value);
  };

  const handleAddOtherWebsiteTypes = () => {
    if (otherWebsiteTypes.trim() !== '') {
      setWebsiteTypes(otherWebsiteTypes);
      setOtherWebsiteTypes('');
    }
  }

  const handleChangeBoxFeatures = (event) => {
    setStateFeatures({
      ...stateFeatures,
      [event.target.name]: event.target.checked,
    });
    setWebsiteFeature(Object.keys(stateFeatures).filter((name) => stateFeatures[name]));
    if (websiteOtherFeatureValue.trim() !== '') {
      setWebsiteFeature([...websiteFeature, websiteOtherFeatureValue]);
    }
  };


  const handleChangeBoxPlugins = (event) => {
    setStatePlugins({
      ...statePlugins,
      [event.target.name]: event.target.checked,
    });
    setWebsitePlugin(Object.keys(statePlugins).filter((name) => statePlugins[name]))
    if (websiteOtherPluginValue.trim() !== '') {
      setWebsitePlugin([...websitePlugin, websiteOtherPluginValue]);
    }
  };

  const handleOtherFeature = (event) => {
    setWebsiteOtherFeature(event.target.checked)
    if (!event.target.checked) {
      setWebsiteOtherFeatureValue('');
      setWebsiteFeature(Object.keys(stateFeatures).filter((name) => stateFeatures[name]));
    }
  }

  const handleOtherFeatureValue = (event) => {
    setWebsiteOtherFeatureValue(event.target.value);
  };


  const handleOtherPlugin = (event) => {
    setWebsiteOtherPlugin(event.target.checked);
    if (!event.target.checked) {
      setWebsiteOtherPluginValue('');
      setWebsitePlugin(Object.keys(statePlugins).filter((name) => statePlugins[name]));
    }
  }

  const handleOtherPluginValue = (event) => {
    setWebsiteOtherPluginValue(event.target.value);
  };

  return (
    <div class="tabpanel2">
      <div class="divmat-mdc-tab-body-content2">

        <Box sx={{
          borderRadius: 'var(--br-3xs)',
          border: '1px solid var(--previewthemeforestnet-maroon)',
          padding: 'var(--padding-8xl) var(--padding-9xl)',
        }}> {/** class="divgig-upcrate-light-bg-tab"*/}
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0 0 25px',
              '& > :not(style)': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            <CssTextField
              label="Project Name"
              helperText="Please enter your project name"
              FormHelperTextProps={{
                style: {
                  color: '#74767e'
                }
              }}
              id="custom-css-outlined-input"
              required
              sx={{
                margin: '8px 0 !important'
              }}
              InputProps={{
                style: {
                  color: 'white'
                }
              }}
            />
            <CssTextField
              label="Description"
              helperText="Please enter your project description"
              FormHelperTextProps={{
                style: {
                  color: '#74767e'
                }
              }}
              id="custom-css-outlined-input"
              required
              multiline
              rows={3}
              sx={{
                margin: '8px 0 !important'
              }}
              InputProps={{
                style: {
                  color: 'white'
                }
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', height: '56px', gap: '133px', paddingBottom: '20px' }}>
            <Box>
              <div class="label-category">Category</div>
              <p class="choose-the-category">
                Choose the category most suitable for your Project.
              </p>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
              <FormControl sx={{ m: 1, width: 300, mt: 3, margin: '0', marginTop: '0', height: '40px' }} size="small">
                <Select
                  inputProps={{
                    classes: {
                      icon: classes.icon,
                    },
                  }}
                  className={classes.select}
                  displayEmpty
                  value={category}
                  onChange={handleChangeCategory}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em style={{ color: '#74767e' }}>SELECT A CATEGORY</em>;
                    }

                    return selected;
                  }}

                  sx={{
                    color: 'white !important',
                  }}
                  MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
                >

                  {categorys.map((categorys) => (
                    <MenuItem
                      key={categorys}
                      value={categorys}
                      style={getStyles(categorys, category, theme)}
                    >
                      {categorys}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
          {category === 'WEBSITE DEVELOPEMENT' &&
            <Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', height: 'auto', paddingBottom: '20px' }}>
                <Box sx={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', }}>
                  <div class="label-category" style={{ marginBottom: '15px' }}>Frontend</div>
                  <p class="choose-the-category" style={{ width: 'auto', height: 'auto', whiteSpace: 'wrap' }}>
                    Choose the programming language and the framework most suitable for your Frontend.
                  </p>

                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "flex-start", alignItems: 'center', width: '100%' }}>
                  <FormControl component="fieldset">
                    <FormGroup aria-label="position" row sx={{ gap: '200px' }}>
                      <FormControlLabel
                        value="html"
                        control={<Checkbox sx={{ color: '#8102ff' }} />}
                        label="HTML"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="css"
                        control={<Checkbox sx={{ color: '#8102ff' }} />}
                        label="CSS"
                        labelPlacement="end"
                      />
                    </FormGroup>
                  </FormControl>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "center", alignItems: 'center', width: '100%', gap: '20px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '230px' }}>
                      <FormControl sx={{ m: 1, width: 230, mt: 3, margin: '0', marginTop: '0', height: '40px' }} size="small">
                        <Select
                          inputProps={{
                            classes: {
                              icon: classes.icon,
                            },
                          }}
                          className={classes.select}
                          displayEmpty
                          value={frontProL}
                          onChange={handleChangeFrontLang}
                          input={<OutlinedInput />}
                          renderValue={(selected) => {
                            if (selected.length === 0) {
                              return <em style={{ color: '#74767e' }}>SELECT A PROGRAMMING LANGUAGE</em>;
                            }

                            return selected
                          }}

                          sx={{
                            color: 'white !important',
                          }}
                          MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
                        >

                          {frontProgLanguages.map((frontProgLanguages) => (
                            <MenuItem
                              key={frontProgLanguages}
                              value={frontProgLanguages}
                              style={getStyles(frontProgLanguages, frontProL, theme)}
                            >
                              {frontProgLanguages}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {frontProL === 'Other' &&
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                          <CssTextField
                            id="custom-css-outlined-input"
                            required
                            value={otherFrontLang}
                            onChange={handleOtherFrontLang}
                            sx={{
                              margin: '8px 0 !important',
                            }}
                            InputProps={{
                              style: {
                                color: 'white',
                                height: '40px'
                              }
                            }}
                          />
                          <Button variant="outlined"
                            onClick={handleAddOtherFrontLang}
                            color='secondary'
                            size='small'
                            sx={{
                              maxWidth: '40px',
                              minWidth: '40px',
                              marginTop: '10px',
                              padding: '0',
                              marginLeft: '5px',
                              height: '34px',
                              borderColor: '#8102ff',
                              color: '#94A3B8'
                            }}
                          >
                            Add
                          </Button>
                        </Box>
                      }
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '230px' }}>
                      <FormControl sx={{ m: 1, width: 230, mt: 3, margin: '0', marginTop: '0', height: '40px' }} size="small">
                        <Select
                          inputProps={{
                            classes: {
                              icon: classes.icon,
                            },
                          }}
                          className={classes.select}
                          displayEmpty
                          value={frontFrame}
                          onChange={handleChangeFrontFramework}
                          input={<OutlinedInput />}
                          renderValue={(selected) => {
                            if (selected.length === 0) {
                              return <em style={{ color: '#74767e' }}>SELECT A FRAMEWORK</em>;
                            }

                            return selected;
                          }}

                          sx={{
                            color: 'white !important',
                          }}
                          MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
                        >

                          {frontFrameworks.map((frontFrameworks) => (
                            <MenuItem
                              key={frontFrameworks}
                              value={frontFrameworks}
                              style={getStyles(frontFrameworks, frontFrame, theme)}
                            >
                              {frontFrameworks}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {frontFrame === 'Other' &&
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                          <CssTextField
                            id="custom-css-outlined-input"
                            required
                            value={otherFrontFrame}
                            onChange={handleOtherFrontFrame}
                            sx={{
                              margin: '8px 0 !important',
                            }}
                            InputProps={{
                              style: {
                                color: 'white',
                                height: '40px'
                              }
                            }}
                          />
                          <Button variant="outlined"
                            onClick={handleAddOtherFrontFrame}
                            color='secondary'
                            size='small'
                            sx={{
                              maxWidth: '40px',
                              minWidth: '40px',
                              marginTop: '10px',
                              padding: '0',
                              marginLeft: '5px',
                              height: '34px',
                              borderColor: '#8102ff',
                              color: '#94A3B8'
                            }}
                          >
                            Add
                          </Button>
                        </Box>
                      }
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', height: 'auto', paddingBottom: '20px' }}>
                <Box sx={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div class="label-category">Backend</div>
                  <p class="choose-the-category" style={{ width: 'auto', height: 'auto', whiteSpace: 'wrap' }}>
                    Choose the programming language and the framework most suitable for your Backend.
                  </p>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "flex-end", alignItems: 'center', width: '100%' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "center", alignItems: 'center', width: '100%', gap: '20px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '230px' }}>
                      <FormControl sx={{ m: 1, width: 230, mt: 3, margin: '0', marginTop: '0', height: '40px' }} size="small">
                        <Select
                          inputProps={{
                            classes: {
                              icon: classes.icon,
                            },
                          }}
                          className={classes.select}
                          displayEmpty
                          value={backProL}
                          onChange={handleChangeBackLang}
                          input={<OutlinedInput />}
                          renderValue={(selected) => {
                            if (selected.length === 0) {
                              return <em style={{ color: '#74767e' }}>SELECT A PROGRAMMING LANGUAGE</em>;
                            }

                            return selected
                          }}

                          sx={{
                            color: 'white !important',
                          }}
                          MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
                        >

                          {backProgLanguages.map((backProgLanguages) => (
                            <MenuItem
                              key={backProgLanguages}
                              value={backProgLanguages}
                              style={getStyles(backProgLanguages, backProL, theme)}
                            >
                              {backProgLanguages}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {backProL === 'Other' &&
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                          <CssTextField
                            id="custom-css-outlined-input"
                            value={otherBackLang}
                            onChange={handleOtherBackLang}
                            required
                            sx={{
                              margin: '8px 0 !important',
                            }}
                            InputProps={{
                              style: {
                                color: 'white',
                                height: '40px'
                              }
                            }}
                          />
                          <Button variant="outlined"
                            onClick={handleAddOtherBackLang}
                            color='secondary'
                            size='small'
                            sx={{
                              maxWidth: '40px',
                              minWidth: '40px',
                              marginTop: '10px',
                              padding: '0',
                              marginLeft: '5px',
                              height: '34px',
                              borderColor: '#8102ff',
                              color: '#94A3B8'
                            }}
                          >
                            Add
                          </Button>
                        </Box>
                      }
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '230px' }}>
                      <FormControl sx={{ m: 1, width: 230, mt: 3, margin: '0', marginTop: '0', height: '40px' }} size="small">
                        <Select
                          inputProps={{
                            classes: {
                              icon: classes.icon,
                            },
                          }}
                          className={classes.select}
                          displayEmpty
                          value={backFrame}
                          onChange={handleChangeBackFramework}
                          input={<OutlinedInput />}
                          renderValue={(selected) => {
                            if (selected.length === 0) {
                              return <em style={{ color: '#74767e' }}>SELECT A FRAMEWORK</em>;
                            }

                            return selected
                          }}

                          sx={{
                            color: 'white !important',
                          }}
                          MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
                        >

                          {backFrameworks.map((backFrameworks) => (
                            <MenuItem
                              key={backFrameworks}
                              value={backFrameworks}
                              style={getStyles(backFrameworks, backFrame, theme)}
                            >
                              {backFrameworks}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {backFrame === 'Other' &&
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                          <CssTextField
                            id="custom-css-outlined-input"
                            required
                            value={otherBackFrame}
                            onChange={handleOtherBackFrame}
                            sx={{
                              margin: '8px 0 !important',
                            }}
                            InputProps={{
                              style: {
                                color: 'white',
                                height: '40px'
                              }
                            }}
                          />
                          <Button variant="outlined"
                            onClick={handleAddOtherBackFrame}
                            color='secondary'
                            size='small'
                            sx={{
                              maxWidth: '40px',
                              minWidth: '40px',
                              marginTop: '10px',
                              padding: '0',
                              marginLeft: '5px',
                              height: '34px',
                              borderColor: '#8102ff',
                              color: '#94A3B8'
                            }}
                          >
                            Add
                          </Button>
                        </Box>
                      }
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '30px'
                }}
              >
                <div class="label-category">Project metadata</div>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    border: '1px solid #8102ff'
                  }}
                >
                  <Box
                    sx={{
                      width: '180px',
                      borderRight: '1px solid #8102ff'
                    }}
                  >
                    <ToggleButtonGroup
                      orientation="vertical"
                      color="primary"
                      value={alignment}
                      exclusive
                      onChange={handleChangeAlignement}
                      aria-label="Platform"
                      sx={{ width: '180px' }}
                    >
                      <ToggleButton
                        value="websiteTypes"
                        required
                        sx={{
                          height: '56px',
                          borderBottomColor: '#8102ff',
                          borderTopRightRadius: 'none !important',
                          color: 'white'
                        }}
                      >
                        WEBSITE TYPE *
                      </ToggleButton>
                      <ToggleButton

                        value="websiteFeatures"
                        sx={{
                          borderBottomColor: '#8102ff',
                          borderTopRightRadius: 'none !important',
                          color: 'white'

                        }}
                      >
                        WEBSITE FEATURES *
                      </ToggleButton>
                      <ToggleButton
                        value="websitePlugins"
                        sx={{
                          borderBottomColor: '#8102ff',
                          borderTopRightRadius: 'none !important',
                          color: 'white'

                        }}
                      >
                        PLUGINS

                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Box>
                  {alignment === 'websiteTypes' &&
                    <Box sx={{ padding: '11px' }}>
                      <div class="label-select-features">Select the website type you support*</div>
                      <FormControl sx={{ m: 1, width: 255, mt: 3, margin: '0', marginTop: '12px', }} size="small">
                        <Select
                          inputProps={{
                            classes: {
                              icon: classes.icon,
                            },
                          }}
                          className={classes.select}
                          displayEmpty
                          value={websiteTypes}
                          onChange={handleChangeWebsiteTypes}
                          input={<OutlinedInput />}
                          renderValue={(selected) => {
                            if (selected.length === 0) {
                              return <em style={{ color: '#74767e' }}>CHOOSE</em>;
                            }

                            return selected
                          }}

                          sx={{
                            color: 'white !important',
                          }}

                          MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}

                        >

                          {types.map((types) => (
                            <MenuItem
                              key={types}
                              value={types}
                              style={getStyles(types, websiteTypes, theme)}
                            >
                              {types}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {websiteTypes === 'OTHER' &&
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                          <CssTextField
                            id="custom-css-outlined-input"
                            required
                            value={otherWebsiteTypes}
                            onChange={handleOtherWebsiteTypes}
                            sx={{
                              margin: '8px 0 !important',
                            }}
                            InputProps={{
                              style: {
                                color: 'white',
                                height: '40px'
                              }
                            }}
                          />
                          <Button variant="outlined"
                            onClick={handleAddOtherWebsiteTypes}
                            color='secondary'
                            size='small'
                            sx={{
                              maxWidth: '40px',
                              minWidth: '40px',
                              marginTop: '10px',
                              padding: '0',
                              marginLeft: '5px',
                              height: '34px',
                              borderColor: '#8102ff',
                              color: '#94A3B8'
                            }}
                          >
                            Add
                          </Button>
                        </Box>
                      }
                    </Box>
                  }
                  {alignment === 'websiteFeatures' &&
                    <Box sx={{ padding: '11px' }}>
                      <div class="label-select-features">Select the features you support*</div>
                      <Box sx={{ display: 'flex', }}>
                        <FormControl sx={{ m: 3, marginBottom: '0' }} component="fieldset" variant="standard">
                          <FormGroup>
                            {features.slice(0, 10).map((checkbox) => (
                              <FormControlLabel
                                key={checkbox.name}
                                control={
                                  <Checkbox
                                    checked={stateFeatures[checkbox.name]}
                                    onChange={handleChangeBoxFeatures}
                                    name={checkbox.name}
                                    sx={{ color: '#8102ff' }}
                                  />
                                }
                                label={checkbox.label}
                              />

                            ))}
                          </FormGroup>
                        </FormControl>
                        <FormControl
                          required
                          component="fieldset"
                          sx={{ m: 3, marginTop: '25px', marginBottom: '0', }}
                          variant="standard"
                        >
                          <FormGroup >
                            {features.slice(10).map((checkbox) => (
                              <FormControlLabel
                                key={checkbox.name}
                                control={
                                  <Checkbox
                                    checked={stateFeatures[checkbox.name]}
                                    onChange={handleChangeBoxFeatures}
                                    name={checkbox.name}
                                    sx={{ color: '#8102ff' }}
                                  />
                                }
                                label={checkbox.label}
                              />
                            ))}
                          </FormGroup>
                        </FormControl>
                      </Box>
                      <Divider sx={{ backgroundColor: '#8102ff', margin: '0 20px' }} />
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <FormControl sx={{ m: 3, marginTop: '0', marginBottom: '0' }} component="fieldset" variant="standard">
                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox
                                sx={{ color: '#8102ff' }}
                                checked={websiteOtherFeature}
                                onChange={handleOtherFeature}
                              />
                              }
                              label="Other"
                            />
                          </FormGroup>
                        </FormControl>
                        {websiteOtherFeature &&
                          <Box>
                            <CssTextField
                              id="custom-css-outlined-input"
                              required
                              value={websiteOtherFeatureValue}
                              onChange={handleOtherFeatureValue}
                              sx={{
                                width: '270px',
                                margin: '8px 0 !important',
                                margin: '0 24px 10px',
                              }}
                              InputProps={{
                                style: {
                                  color: 'white',
                                  height: '40px',

                                }
                              }}
                            />
                            <Button
                              variant="outlined"
                              onClick={handleChangeBoxFeatures}
                              color='secondary'
                              sx={{
                                height: '40px',
                                borderColor: '#8102ff',
                                color: '#94A3B8'
                              }}
                            >
                              Add
                            </Button>
                          </Box>
                        }
                      </Box>
                    </Box>
                  }
                  {alignment === 'websitePlugins' &&
                    <Box sx={{ padding: '11px' }}>
                      <div class="label-select-features">Select the plugins you support*</div>
                      <Box sx={{ display: 'flex', }}>
                        <FormControl sx={{ m: 3, marginBottom: '0' }} component="fieldset" variant="standard">
                          <FormGroup>
                            {plugins.slice(0, 10).map((checkbox) => (
                              <FormControlLabel
                                key={checkbox.name}
                                control={
                                  <Checkbox
                                    checked={statePlugins[checkbox.name]}
                                    onChange={handleChangeBoxPlugins}
                                    name={checkbox.name}
                                    sx={{ color: '#8102ff' }}
                                  />
                                }
                                label={checkbox.label}
                              />

                            ))}
                          </FormGroup>
                        </FormControl>
                        <FormControl
                          required
                          component="fieldset"
                          sx={{ m: 3, marginTop: '25px', marginBottom: '0' }}
                          variant="standard"
                        >
                          <FormGroup >
                            {plugins.slice(10).map((checkbox) => (
                              <FormControlLabel
                                key={checkbox.name}
                                control={
                                  <Checkbox
                                    checked={statePlugins[checkbox.name]}
                                    onChange={handleChangeBoxPlugins}
                                    name={checkbox.name}
                                    sx={{ color: '#8102ff' }}
                                  />
                                }
                                label={checkbox.label}
                              />
                            ))}
                          </FormGroup>
                        </FormControl>
                      </Box>
                      <Divider sx={{ backgroundColor: '#8102ff', margin: '0 20px' }} />
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <FormControl
                          sx={{
                            m: 3,
                            marginTop: '0',
                            marginBottom: '0'
                          }}
                          component="fieldset"
                          variant="standard"
                        >
                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox
                                sx={{ color: '#8102ff' }}
                                checked={websiteOtherPlugin}
                                onChange={handleOtherPlugin}
                              />
                              }
                              label="Other"
                            />
                          </FormGroup>
                        </FormControl>
                        {websiteOtherPlugin &&
                          <Box>
                            <CssTextField
                              id="custom-css-outlined-input"
                              required
                              value={websiteOtherPluginValue}
                              onChange={handleOtherPluginValue}
                              sx={{
                                width: '270px',
                                margin: '8px 0 !important',
                                margin: '0 24px 10px',
                              }}
                              InputProps={{
                                style: {
                                  color: 'white',
                                  height: '40px'
                                }
                              }}
                            />
                            <Button variant="outlined"
                              onClick={handleChangeBoxPlugins}
                              color='secondary'
                              sx={{
                                height: '40px',
                                borderColor: '#8102ff',
                                color: '#94A3B8'
                              }}
                            >
                              Add
                            </Button>
                          </Box>
                        }
                      </Box>
                    </Box>
                  }
                </Box>
              </Box>
            </Box>}
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '500px'

          }}
        >

          <img
            class="asset-2-2-2"
            loading="lazy"
            alt=""
            src={projectImage}
          />

          <Box >
            <h3 class="upload-project-documents">
              Upload Project Documents
            </h3>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '450px',
                height: '350px',
                alignSelf: 'stretch',
                borderRadius: 'var(--br-base)',
                border: '1px solid var(--color-darkviolet)',
                fontSize: 'var(--font-size-6xl)',
                gap: '34px'
              }}
            >
              <h2 class="drop-files-here">
                Drop files here or click to upload.
              </h2>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                color='secondary'
                sx={{
                  backgroundColor: '#E7005E',
                  borderRadius: '20px'
                }}
              >
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>
            </Box>

          </Box>
        </Box>
      </div>
    </div >
  )
}
