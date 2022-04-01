import React, { useState } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import IconButton from '@material-ui/core/IconButton';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import { useDispatch } from 'react-redux';
import { submitData } from '../actions/index';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: "",
        fontSize: 22,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);
const employmentType = ["full time", "part-time", "contract", "temporary", "volunteer", "internship"]
const jobSection = ["business", "design", "engineering", "finance", "humanResources", "legal", "marketing", "operations", "product", "sales", "security", "support"]
const workPlaceTypes = [{
    type: "on-site",
    desc: "employees come to work in-person"
},
{
    type: "hybrid",
    desc: "employees work on-site and off-site"
},
{
    type: "remote",
    desc: "employees work off-site"
}]

const useStyles = makeStyles(() => ({
    margin: {
        margin: "0px",
    },
    borderRadius: {
        borderRadius: "10px"
    },
    backgroundColor: {
        backgroundColor: "#dbdcdc"
    }

}));

const Dashboard = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const [data, setData] = useState({
        title: "",
        status: "",
        jobSections: "",
        employmentsType: "",
        workplaceType: "",
        location: "",
        shortDesc: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("myData", JSON.stringify([data]));
        dispatch(submitData(data))
        setData({
            title: "",
            status: "",
            jobSections: "",
            employmentsType: "",
            workplaceType: "",
            location: "",
            shortDesc: ""
        })
    }

    return (
        <div className="container mt-5">
            <h1 className='text-center mb-5'>Career Dashboard</h1>
            <div className="row">
                <div className="col-md-8">
                    <input type="text" value={data.title} name="title" onChange={handleChange} className={`form-control fs-4 ${classes.borderRadius}  ${classes.backgroundColor} border-0`} placeholder='Title' />
                </div>
                <div className="col-md-4">
                    <FormControl className={`${classes.margin} w-100 p-0 ${classes.borderRadius}  ${classes.backgroundColor} border-0`}>
                        <Select
                            className='p-0'
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            value={data.employmentsType}
                            name="employmentsType"
                            displayEmpty
                            input={<BootstrapInput />}
                            onChange={handleChange}
                        >
                            <MenuItem value="" className="border-bottom py-3">
                                Employment Type
                            </MenuItem>
                            {employmentType.map((employments, index) => {
                                return (
                                    <MenuItem value={employments} className="border-bottom py-3" key={index}>{employments}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </div>
                <div className="col-md-3 mt-4">
                    <input type="text" className={`form-control fs-5 p-2 ${classes.borderRadius}  ${classes.backgroundColor} border-0`} placeholder='Location' name="location" value={data.location} onChange={handleChange} />
                </div>
                <div className="col-md-3 mt-4">
                    <FormControl className={`${classes.margin} w-100  ${classes.borderRadius}  ${classes.backgroundColor}`}>
                        <Select
                            className='p-0'
                            value={data.jobSections}
                            name="jobSections"
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            displayEmpty
                            onChange={handleChange}
                            input={<BootstrapInput />}

                        >
                            <MenuItem value="" className="border-bottom py-3">
                                Job Section
                            </MenuItem>
                            {
                                jobSection.map((jobs, index) => {
                                    return (
                                        <MenuItem value={jobs} className="border-bottom py-3" key={index}>{jobs}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                </div>

                <div className="col-md-3 mt-4">
                    <FormControl className={`${classes.margin} w-100 ${classes.borderRadius}  ${classes.backgroundColor}`}>
                        <Select
                            className='p-0'
                            value={data.workplaceType}
                            name="workplaceType"
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            displayEmpty
                            onChange={handleChange}
                            input={<BootstrapInput />}

                        >
                            <MenuItem value="" className="border-bottom py-3">
                                Workplace Types
                            </MenuItem>
                            {
                                workPlaceTypes.map((works, index) => {
                                    return (
                                        <MenuItem value={works.type} className="border-bottom py-3 align-items-start flex-column" key={index}>
                                            <p className="m-0 fw-bold ">{works.type}</p>
                                            <p className="m-0 fs-6">{works.desc}</p>
                                        </MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                </div>
                <div className="col-md-3 mt-4">
                    <FormControl className={`${classes.margin} w-100 ${classes.borderRadius}  ${classes.backgroundColor} `}>
                        <Select
                            className='p-0'
                            value={data.status}
                            name="status"
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            displayEmpty
                            onChange={handleChange}
                            input={<BootstrapInput />}

                        >
                            <MenuItem value="" className="border-bottom py-3">
                                Paid/gratis
                            </MenuItem>
                            <MenuItem value="paid" className="border-bottom py-3" >
                                paid
                            </MenuItem>
                            <MenuItem value="gratis" className="border-bottom py-3" >
                                gratis
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-md-12 mt-5">
                    <input type="text" className={`form-control fs-5 p-2 ${classes.borderRadius}  ${classes.backgroundColor} border-0`} placeholder='Short Description(150 words)' value={data.shortDesc} name="shortDesc" onChange={handleChange} /></div>
            </div>

            <div className="container  mt-5 mb-3 pt-5 px-5 pb-3" >
                <div className="bg-white d-flex flex-column py-3 px-2 " style={{ borderRadius: "10px" }}>
                    <h3>Add a job description</h3>
                    <p><span>Description</span> <span className="text-primary">*</span></p>
                    <div className="mb-2">
                        <IconButton>
                            <FormatBoldIcon />
                        </IconButton>
                        <IconButton>
                            <FormatItalicIcon />
                        </IconButton>
                        <IconButton>
                            <FormatUnderlinedIcon />
                        </IconButton>
                        <IconButton>
                            <FormatListBulletedIcon />
                        </IconButton>
                        <IconButton>
                            <FormatListNumberedIcon />
                        </IconButton>
                    </div>
                    <textarea name="" id="" cols="20" rows="7" className="form-control"></textarea>
                    <h3 className="mt-3">Add skills</h3>
                    <p>add skills keywords to make your `job more visible to the right candidates (select up to 10)</p>
                    <div className="ms-3"><button className="btn btn-outline-success rounded-pill px-3"><span className="me-2">Add skill</span><AddIcon /></button></div>
                </div>
                <div className="d-flex flex-row-reverse mt-3"><Button variant="contained" className={`${classes.borderRadius} ${classes.backgroundColor} fs-5 fw-bold`} onClick={handleSubmit} >
                    Submit
                </Button></div>
            </div>
        </div>
    )
}

export default Dashboard