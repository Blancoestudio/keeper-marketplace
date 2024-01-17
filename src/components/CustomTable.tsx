import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

import { useForm } from 'src/hooks/useForm';

import { visuallyHidden } from '@mui/utils';
import { Grid, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { CommuneData, HeadCell } from 'src/interfaces/Plan';
import { CustomTextField, CustomButton } from 'src/components';

import FilterListIcon from '@mui/icons-material/FilterList';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';



const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Comuna',
  },
  {
    id: 'audience',
    numeric: true,
    disablePadding: true,
    label: 'Audiencia',
  },
  {
    id: 'price.monthly',
    numeric: true,
    disablePadding: true,
    label: 'Valor mensual',
  }
];

export type Order = 'asc' | 'desc';

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;

  const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all communes',
            }}
          />
        </TableCell>
        {
          headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={ headCell.numeric ? 'center' : 'left' }
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                <Typography variant={'body2'} color={'primary'} fontWeight={'700'}>
                  { headCell.label.toUpperCase() }
                </Typography>
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

type OrderByKeys = keyof CommuneData | 'price.monthly' | 'price.annual' | string;

function descendingComparator<T extends CommuneData>(a: T, b: T, orderBy: OrderByKeys) {
  
  // Asegurarse de que orderBy sea un string
  if (typeof orderBy !== 'string') {
    throw new Error('orderBy must be a string');
  }
  
  // Dividir las claves si orderBy es una propiedad anidada
  const orderByKeys = orderBy.split('.');
  let aValue = a;
  let bValue = b;

  // Acceder a la propiedad anidada
  orderByKeys.forEach(key => {
    aValue = aValue[key];
    bValue = bValue[key];
  });

  if (bValue < aValue) {
    return -1;
  }
  if (bValue > aValue) {
    return 1;
  }
  return 0;
}

function getComparator( // Permitir strings para propiedades anidadas
  order: Order, 
  orderBy: OrderByKeys,
): (a: CommuneData, b: CommuneData) => number { // Aceptar CommuneData directamente
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy) // Asumir que orderBy es un string para propiedades anidadas
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}











export interface TableProps {
  communes: CommuneData[],
  selectedCommunes: string[],
  setSelectedCommunes: React.Dispatch<React.SetStateAction<string[]>>,
  


  // setcommunesSelected: React.Dispatch<React.SetStateAction<number>>,
  setAudience: React.Dispatch<React.SetStateAction<number>>,
  setMonthlyValue: React.Dispatch<React.SetStateAction<number>>,
  setAnnualValue: React.Dispatch<React.SetStateAction<number>>,
} 

export const CustomTable = ({ 
  communes, 
  selectedCommunes,
  setSelectedCommunes,
  
  
  
  // setcommunesSelected, 
  setAudience, 
  setMonthlyValue, 
  setAnnualValue 
}: TableProps) => {

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<string>('name');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [isSearch, setIsSearch] = React.useState(false);

  const dataCommunes = React.useMemo(() => communes, [communes]);
  const [data, setData] = React.useState<CommuneData[]>([]);
  const [dataSelected, setDataSelected] = React.useState<CommuneData[]>([]);

  const [isFilterSelection, setIsFilterSelection] = React.useState(false);

  const tableRowRef = React.useRef<HTMLTableRowElement>(null);
  const [tableRowHeight, setTableRowHeight] = React.useState(0);

  const searchTerm = '';
  const { onInputChange, onResetForm } = useForm({
    searchTerm: ''
  });

  React.useEffect(() => {
    setData(dataCommunes);
  }, [])
  
  React.useEffect(() => {
    setData(dataCommunes);
  }, [communes])

  React.useEffect(() => {
    if (tableRowRef.current) {
      const tableHeight = tableRowRef.current.clientHeight;
      setTableRowHeight(tableHeight * 5.6);
    }
  }, [dataCommunes])

  React.useEffect(() => {
    
    if (dataSelected.length === 0) {
      setIsFilterSelection(false);
      setData( dataCommunes );
    }
    
  }, [data, dataSelected])

  React.useEffect(() => {
    filterSelectedItems();
  }, [selected])
  
  React.useEffect(() => {
    
  }, [isSearch])
  
  React.useEffect(() => {
    
    if (isFilterSelection) {
      setData( dataSelected );
    }
    // setcommunesSelected(dataSelected.length);

    let monthlyVal = 0;
    let annualVal = 0;
    let audienceVal = 0;
    for (const item of dataSelected) {
      monthlyVal += item.price.monthly;
      annualVal += item.price.annual;
      audienceVal += item.audience;
    }

    setMonthlyValue( monthlyVal );
    setAnnualValue(annualVal);
    setAudience(audienceVal);

  }, [dataSelected])


  
  const handleRequestSort = ( event: React.MouseEvent<unknown>, property: string ) => {
    console.log(event);
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n._id);
      setSelected(newSelected);
      return;
    }
    setData(data);
    setIsFilterSelection(false);
    setSelected([]);
  };

  const filterSelectedItems = () => {
    setDataSelected( data.filter( el => selected.includes(el._id) ) );
  }

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {

    if (selectedCommunes.includes(id)) {
      const newSelectedCommunes = selectedCommunes.filter((communeId: string) => communeId !== id);
      setSelectedCommunes(newSelectedCommunes);
    } else {
      const newSelectedCommunes = [...selectedCommunes, id];
      setSelectedCommunes(newSelectedCommunes);
    }

    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    
    setSelected(newSelected);
  };
  
  const isSelected = (id: string) => {
    return selected.indexOf(id) !== -1
  };

  const visibleRows = React.useMemo( 
    () => stableSort(data, getComparator(order, orderBy)),
    [order, orderBy, data],
  );

  const handleFilterSelection = () => {
    setIsFilterSelection( !isFilterSelection );
    
    isFilterSelection
      ? setData( dataCommunes )
      : setData( dataSelected )
  }

  const handleSearchCommune = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredData = communes.filter(item => item.name.includes(searchTerm));
    console.log({filteredData});
    setIsSearch(true);
    setData(filteredData);
  }

  const handleClearSearch = () => {
    setData(dataCommunes);
    onResetForm();
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ border: '1px solid #E7E7E7', borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottom: 0 }}>
        <Toolbar>
          <Grid container alignItems={'center'}>
            <Grid item xs={7}>
              <Stack direction={'row'} width={'100%'} alignItems={'center'} gap={2}>
                <IconButton>
                  <FilterListIcon />
                </IconButton>

                <Box>
                <form onSubmit={ (e) => handleSearchCommune(e) }>
                  <CustomTextField
                    startAdornment={<SearchIcon />}
                    name='searchTerm'
                    value={ searchTerm }
                    onChange={ onInputChange }
                    placeholder={'Buscar comuna'}
                    endAdornment={ 
                      <IconButton aria-label="delete" onClick={ handleClearSearch }>
                        <CloseIcon  /> 
                      </IconButton>
                    }
                    />
                </form>
                </Box>
              </Stack>
              
            </Grid>
            <Grid item xs ={5} display={'flex'} justifyContent={'flex-end'}>
                {
                  selected.length > 0 
                    && <CustomButton 
                        variant={isFilterSelection ? 'contained' : 'outlined'} 
                        children={isFilterSelection ? 'Mostrar todo' : 'Mostrar selección'} 
                        color={ isFilterSelection ? 'primary' : 'primary' }
                        startIcon={<FilterAltIcon/>} 
                        onClick={ handleFilterSelection  }
                        sx={{ margin: 0 }}
                        />
                }
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
      
      <Paper 
        elevation={0} 
        sx={{ 
          width: '100%', 
          mb: 0, 
          border: '1px solid #E7E7E7', 
          borderTop: 0,
          maxHeight: tableRowHeight,
          minHeight: tableRowHeight,
          overflow: 'auto', 
          borderTopLeftRadius: 0, 
          borderTopRightRadius: 0 
        }}>
      
        <TableContainer sx={{ 
            maxHeight: tableRowHeight, 
          }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row._id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    ref={index === 0 ? tableRowRef : null}
                    hover
                    onClick={(event) => handleClick(event, row._id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row._id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer', borderTopLeftRadius: 0 }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      <Typography variant={'body1'} sx={{ lineHeight: 1 }}>{ row.name }</Typography>
                      <Typography variant={'caption'}>Santiago</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant={'body1'} sx={{ lineHeight: 1 }}>{row.audience}</Typography>
                      <Typography variant={'caption'}>Casas/Dptos</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant={'body1'} sx={{ lineHeight: 1 }}>{row.price.monthly}</Typography>
                      <Typography variant={'caption'}>UF</Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}