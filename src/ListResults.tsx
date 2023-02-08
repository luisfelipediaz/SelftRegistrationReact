import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { SelfRegistration } from './models';

interface ListResultsProps {
  items: SelfRegistration[];
}

const ListResults = ({ items }: ListResultsProps) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Fecha</TableCell>
          <TableCell>Situación</TableCell>
          <TableCell>Emoción</TableCell>
          <TableCell>Pensamientos</TableCell>
          <TableCell>Como lo resolvió</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.situation}</TableCell>
            <TableCell>{item.emotion}</TableCell>
            <TableCell>{item.thoughts}</TableCell>
            <TableCell>{item.questions}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListResults;
