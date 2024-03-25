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



function Hyundaidashboard() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenTwo, setDropdownOpenTwo] = useState(false);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1'); // Initially setting tab1 as active
  const [dateRange, setDateRange] = useState([]);


//   date



  
    const handleDateChange = (dates) => {
      setDateRange(dates);
    }

// staaart of over view taable
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
    { id: 1, name: 'fvgbh', email: 22, phone: 567, names: 456789, emails: 456909, phones: 4567804777,count:456 },
    { id: 2, name:'fvgbh', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777,count:456 },
    { id: 3, name:'fvgbh', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777,count:456  },
    { id: 4, name: 'rht', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777 ,count:456 },
    { id: 5, name: 'ssdfgh', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777,count:456  },
    { id: 6, name: 'asdfg', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777,count:456  },
    { id: 7, name: 'fvgbh', email: 22, phone: 567, names: 456789, emails: 456909, phones: 4567804777,count:456 },
    { id: 8, name:'fvgbh', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777,count:456 },
    { id: 9, name:'fvgbh', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777,count:456  },
    { id: 10, name: 'rht', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777 ,count:456 },
    { id: 11, name: 'ssdfgh', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777 ,count:456 },
    { id: 12, name: 'asdfg', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777 ,count:456 },
    { id: 13, name: 'fvgbh', email: 22, phone: 567, names: 456789, emails: 456909, phones: 4567804777 ,count:456},
    { id: 14, name:'fvgbh', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777,count:456  },
    { id: 15, name:'fvgbh', email:  22, phone:  567, names: 456789, emails: 456909, phones: 4567804777 ,count:456 },
  
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

// end of overview table
 

 
   

   

   
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };


    const columnsTwo = [
      { id: 'id', name: 'SI NO' },
      { id: 'name', name: 'Dealer name' },
      { id: 'email', name: 'Dealer code' },
      { id: 'phone', name: 'Region' },
      { id: 'names', name: 'event' },
      { id: 'emails', name: 'Description' },
      { id: 'phones', name: 'Event date' }
  ];

  // Define dummy data
  const dummyDataTwo = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890',names: 'John Doe', emails: 'john@example.com', phones: '123-456-7890' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '987-654-3210',names: 'John Doe', emails: 'john@example.com', phones: '123-456-7890' },
      { id: 3, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890',names: 'John Doe', emails: 'john@example.com', phones: '123-456-7890' },
      { id: 4, name: 'Jane Doe', email: 'jane@example.com', phone: '987-654-3210',names: 'John Doe', emails: 'john@example.com', phones: '123-456-7890' },
      { id: 5, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890',names: 'John Doe', emails: 'john@example.com', phones: '123-456-7890' },
      { id: 6, name: 'Jane Doe', email: 'jane@example.com', phone: '987-654-3210',names: 'John Doe', emails: 'john@example.com', phones: '123-456-7890' },
      // Add more dummy data as needed
  ];

  const [rowstwo, setRows] = useState(dummyDataTwo);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  

  const handleChangePage = (event, newPage) => {
      setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
};


// for region

const regionNames = ["Select all", "East", "West", "North", "South", "Central"];
const zoneCategoryMapping = {
  East: "E1",
  West: "W1",
  North: "N1",
  South: "S1",
  Central: "C1",
};
const eastcategoryNames = ["E1", "E2", "E3", "E4"];
const westcategoryNames = ["W1", "W2", "W3", "W4"];
const northcategoryNames = ["N1", "N2", "N3", "N4"];
const southcategoryNames = ["S1", "S2", "S3", "S4"];
const centralcategoryNames = ["C1", "C2", "C3", "C4"];

const [Date, setDate] = useState(["2023-12-11","2024-01-14"]);
  const [internalSelectedType, setInternalSelectedType] = useState("Select All");
  const [internalCategory, setInternalCategory] = useState("");
  const [internalRegion, setInternalRegion] = useState("Select all");


  const handleCategoryChange = (event) => {
    setInternalCategory(event.target.value);
  };
  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    setInternalRegion(selectedRegion);
    // Set category based on selected region
    const category = zoneCategoryMapping[selectedRegion];
    setInternalCategory(category);
  };

  const getCategories = () => {
    switch (internalRegion) {
      case "East":
        return eastcategoryNames;
      case "West":
        return westcategoryNames;
      case "North":
        return northcategoryNames;
      case "South":
        return southcategoryNames;
      case "Central":
        return centralcategoryNames;
      default:
        return [];
    }
  };


console.log("internalSelectedType",internalSelectedType)
console.log("internalCategory",internalCategory)
console.log("internalRegion",internalRegion)


const headersOverview = columns.map(column => column.name);
console.log("heaersoverview",headersOverview ) // Only extract column names
   
const csvDataOverview = [
    headersOverview,
    ...rows.map(row => columns.map(column => row[column.id]))
];

const headersDealerWise = columnsTwo.map(column => column.name);
const csvDataDealerWise = [
    headersDealerWise,
    ...rowstwo.map(row => columnsTwo.map(column => row[column.id]))
];

const getCSVData = () => {
    let csvData;
    if (activeTab === 'tab1') {
        csvData = csvDataOverview.slice(); // Make a copy of the overview CSV data
    } else if (activeTab === 'tab2') {
        csvData = csvDataDealerWise.slice(); // Make a copy of the dealer wise CSV data
    }
    
    // Add the total values row to the CSV data
    const totalRow = columns.map(column => totalValues[column.id]);
    csvData.push(totalRow);

    return csvData;
};


    return (
        <>
            <div className='hyundai-dashboard-navbar-section'>
                <div className='hyundai-navbar-flexbox-container'>
                    <div className='hyundai-image-section-container'>
                        <div className='hyundai-image-section'><img src={hyundaicon} style={{ width: "100%", height: "100%", objectFit: "contain" }} alt="hyundai-icon" /></div>

                    </div>
                    <div className='admin-logout-section-container'>
                        <div className='admin-text-div'><b>Admin</b></div>
                        <div className='logout-button-div'><button className='logout-btn'>Logout</button></div>
                     </div>
                     </div>

                </div>
               
                <div className='hyundai-content-section'>

                    {/* zone section  */}
                    
                  <div>
                    <div className='zone-div'>
                        Zone
                    </div>

                    {/* region dropdown */}
                   <div className='region-dropdown'>
                
                   <FormControl sx={{ m: 0, width: 150, height: 100, }}>
            <Select
              style={{
                textAlign: "center",
                fontSize: "15.711px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                backgroundColor: "white",
              }}
              value={internalRegion}
              onChange={handleRegionChange}
              renderValue={(selected) => {
                if (Array.isArray(selected)) {
                  return selected.join();
                } else {
                  return selected;
                }
              }}
            >
              {regionNames.map((regionOption) => (
                <MenuItem
                  key={regionOption}
                  value={regionOption}
                 
                >
                       <Checkbox
                    style={{ color: "rgba(104, 82, 144, 1)" }}
                    checked={internalSelectedType.includes(regionOption)}
                  />
                  <ListItemText primary={regionOption} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
         





                   </div>
                  </div>


{/* region section */}

                  <div>
                    <div className='zone-div'>
                       Region
                    </div>
                   <div>

                   <FormControl sx={{ m: 0, width: 150, height: 100,  }}>
              <Select
                style={{
                  textAlign: "center",
                  fontSize: "15.711px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  backgroundColor: "white",
                }}
                value={internalCategory}
                onChange={handleCategoryChange}
                renderValue={(selected) => {
                  if (Array.isArray(selected)) {
                    return selected.join();
                  } else {
                    return selected;
                  }
                }}
              >
                {getCategories().map((regionOption) => (
                  <MenuItem
                    key={regionOption}
                    value={regionOption}
                    style={{
                      backgroundColor:
                        internalCategory === regionOption
                          ? "rgba(104, 82, 144, 1)"
                          : "white",
                      color:
                        internalCategory === regionOption
                          ? "white"
                          : "rgba(104, 82, 144, 1)",
                    }}
                  >
                    <ListItemText primary={regionOption} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

                   </div>
                  </div>


                  {/* date picker */}
                  <div>
                  <div className='zone-div'>
                       Date Range
                    </div>
                    <div>
                    <DatePicker.RangePicker
      style={{ width: '100%' }}
      onChange={handleDateChange}
      value={dateRange}
  
    />
                    </div>

             <div>

             </div>
    </div>

    </div>

    {/* tab section */}
    <div className='data-section'>
    <div className="tabs-flexbox-container">

                  
                    <div className='tabs-flexbox-container-two'>
                    <div className={activeTab === 'tab1' ? 'active-tab ' : 'inactive-tab'} onClick={() => handleTabChange('tab1')}>Overview</div>
                    <div className={activeTab === 'tab2' ? 'active-tab' : 'inactive-tab'} onClick={() => handleTabChange('tab2')}>Dealer wise report</div>
                    </div>



            

                    <div>
                    <div className='download-section'>
                <div className='download-report-div'>
                    {/* Use CSVLink to trigger download */}
                    <CSVLink data={getCSVData()}  filename={"report.csv"}>Download report</CSVLink>
                </div>
                <div className='download-img'><img src={download} alt="download-icon" style={{ width: "100%", height: "100%", objectFit: "contain" }} /></div>
            </div>
                    </div>
                </div>

                <div className="tab-content">
                    {activeTab === 'tab1' && (
                        // Content for Tab 1
                        <div className='overview-section'>
                           
                            
                            <div className='search-section' >

                            <div className='search-section'>
                            <img src={customSearchIcon} alt="Search" className="custom-search-icon" />
                <input
                    type="text"
                    placeholder="Search for region"
                    className="searchbar"
                />
               
            </div>
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
                                    <TableCell key={j} sx={{ width: `${100 / columns.length}%` }}>
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
                    )}
                    {activeTab === 'tab2' && (
                        // Content for Tab 2
                        <div className='datawisereport-section'>
                           
                            
                        <div className='search-section' style={{backgroundColor:"#FFFFFF",padding:"10px"}}>

                          <input type="search" value="" placeholder='seach for region' />

                    </div>


                    <div className='datawisereport-table-section'>


                    <div style={{ textAlign: 'center' }}>
        
        <Paper sx={{ width: '100%', marginLeft: '0%' }}>
            <TableContainer >
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columnsTwo.map((column) => (
                                <TableCell className='table-columns-div' key={column.id} sx={{ width: `${100 / columns.length}%` }}>{column.name}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowstwo && rowstwo
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, i) => {
                                return (
                                    <TableRow key={i} sx={{ '&:nth-of-type(even)': { backgroundColor: '#f2f2f2' } }}>
                                        {columnsTwo && columnsTwo.map((column, j) => {
                                            let value = row[column.id];
                                            return (
                                                <TableCell key={j} className='total-div' sx={{ width: `${100 / columns.length}%` }}>
                                                    {value}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
           
            <div style={{ display: 'flex', justifyContent: 'right', marginTop: '20px' }}>
            <div className="custom-pagination">
<TablePagination
    rowsPerPageOptions={[5, 10, 25]}
    component="div"
    count={rowstwo.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
    labelRowsPerPage="Rows per page"
    labelDisplayedRows={() => ''}
    SelectProps={{
        inputProps: { 'aria-label': 'Rows per page' },
        native: true,
    }}
/>
</div>




              <button onClick={() => handleChangePage(null, page - 1)} disabled={page === 0}>{'<'}</button>
                <span style={{ margin: '0 10px' }}>{`${page + 1}/${Math.ceil(rowstwo.length / rowsPerPage)}`}</span>
                <button onClick={() => handleChangePage(null, page + 1)} disabled={page === Math.ceil(rowstwo.length / rowsPerPage) - 1}>{'>'}</button>
            </div>
        </Paper>
    </div>
                    

                      </div>

                    </div>
                    )}
                </div>
                </div>
          
        </>
    );
}
export default Hyundaidashboard;
