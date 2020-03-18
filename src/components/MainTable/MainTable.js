import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  Container,
  Typography
} from '@material-ui/core';
import style from './style'
import { StyledTableCell, StyledTableRow } from './style'


const MainTable = ({ data }) => {

  const classes = style()

  return (
    <Container >
      <Typography className={classes.typo}>Browse Questions</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID <i className="fas fa-sort"></i></StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Type</StyledTableCell>
              <StyledTableCell align="right">Difficulty</StyledTableCell>
              <StyledTableCell align="right">Question / Statement</StyledTableCell>
              <StyledTableCell align="right">Created By</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  ID Number
                </StyledTableCell>
                <StyledTableCell align="right">{row.category}</StyledTableCell>
                <StyledTableCell align="right">{row.type === 'boolean' ? 'True / False' : row.type}</StyledTableCell>
                <StyledTableCell align="right">{row.difficulty}</StyledTableCell>
                <StyledTableCell align="right">{row.question}</StyledTableCell>
                <StyledTableCell align="right">User</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default MainTable;