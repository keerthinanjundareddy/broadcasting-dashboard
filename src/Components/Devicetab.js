import React,{useState} from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,TablePagination} from "@mui/material";
import { DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './Hyundaidashboard.css'
import hyundaicon from '../Assets/hyundai.png'
import download from '../Assets/download (2).png'
import customSearchIcon from '../Assets/icon.png'; 
import { Input } from 'antd';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { CSVLink } from 'react-csv';
import previcon from '../Assets/icon (2).png'
import nexticon from '../Assets/icon (1).png'



function Devicetab() {
    const[searchValue,setSearchValue]=useState("");
    const columns = [
        { id: 'id', name: 'SI NO' },
        { id: 'name', name: 'Region' },
        { id: 'email', name: 'No. of Dealers with Solution Installed' },
        { id: 'phone', name: 'No. of Dealers Conducting Live Events on FB/YT' },
        { id: 'names', name: '% of Dealers Conducting FB/YT Events' },
        { id: 'emails', name: 'Total No. of Events Gone Live (FB/YT)' },
        { id: 'phones', name: 'Total Views Generated (FB/YT)' },
        { id: 'count', name: 'Total likes  (FB/YT)' }
    ];
    
    const dummyData = [
        { id: 1, name: 'CRO1', email: 22, phone: 567, names: 456789, emails: 456909, phones: 4567804777,count:456 },
        { id: 2, name:'CRO2', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777,count:456 },
        { id: 3, name:'CRO3', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777,count:456  },
        { id: 4, name: 'CRO4', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777 ,count:456 },
        { id: 5, name: 'CRO5', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777,count:456  },
        { id: 6, name: 'CRO6', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777,count:456  },
        { id: 7, name: 'CRO7', email: 22, phone: 567, names: 456789, emails: 456909, phones: 4567804777,count:456 },
        { id: 8, name:'CRO8', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777,count:456 },
        { id: 9, name:'CRO9', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777,count:456  },
        { id: 10, name: 'CR1O', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777 ,count:456 },
        { id: 11, name: 'CR11', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777 ,count:456 },
        { id: 12, name: 'CR12', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777 ,count:456 },
        { id: 13, name: 'CR13', email: 22, phone: 567, names: 456789, emails: 456909, phones: 4567804777 ,count:456},
        { id: 14, name:'CR14', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777,count:456  },
        { id: 15, name:'CR15', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777 ,count:456 },
      
        // Add more dummy data as needed
    ];
    
    const [rows] = useState(dummyData);
    
    // Calculate total sum of values for each column
    const totalValues = columns.reduce((total, column) => {
      if (column.id !== 'id') {
          const sum = rows.reduce((sum, row) => sum + parseInt(row[column.id]) || 0, 0);
          total[column.id] = column.id === 'name' && sum === 0 ? 'Total' : sum;
      }
      return total;
    }, {});
    const handleSearch = () =>{
        
    }
    
  return (
    <>
     <div className='overview-section'>
                           
                            
                  

                           <div className='search-section'>
                           <img src={customSearchIcon} alt="Search" className="custom-search-icon" />
               <input
                   type="text"
                   placeholder="Search for region"
                   className="searchbar"
                   onChange={handleSearch}
                   value={searchValue}
               />
              
           </div>
                   
                       <div className='overview-table'>

                       <div style={{ textAlign: 'center' }}>
       
       <Paper sx={{ width: '100%', marginLeft: '0%', }}>
           <TableContainer sx={{maxHeight: 10000}}>
               <Table stickyHeader>
                   <TableHead>
                       <TableRow>
                           {columns.map((column) => (
                               <TableCell  className='table-columns-div' key={column.id} sx={{ width: `${100 / columns.length}%` }}>{column.name}</TableCell>
                           ))}
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {rows.map((row, i) => (
                           <TableRow key={i} className='table-data-div' sx={{ '&:nth-of-type(even)': { backgroundColor: '#f2f2f2' } }}>
                               {columns.map((column, j) => (
                                   <TableCell key={j} sx={{ width: `${100 / columns.length}%` }} className='table-datas-div'>
                                       {row[column.id]}
                                   </TableCell>
                               ))}
                           </TableRow>
                       ))}
                       {/* Display total values */}
                       <TableRow>
                           {columns.map((column, j) => (
                               <TableCell key={j} className='total-div' sx={{ width: `${100 / columns.length}%` }}>
                                   {totalValues[column.id]}
                               </TableCell>
                           ))}
                       </TableRow>
                   </TableBody>
               </Table>
           </TableContainer>
       </Paper>
   </div>


                         </div>
                      

                       </div>
      
    </>
  )
}

export default Devicetab
