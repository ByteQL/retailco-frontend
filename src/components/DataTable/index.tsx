// react
import React, { ReactNode } from 'react';

// third party components
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  BoxProps,
  Box,
} from '@chakra-ui/react';

export type Column = {
  title: string;
  dataIndex?: string;
  key?: string;
  render?: (record: any) => ReactNode;
  width?: string | number;
};
interface DataTableProps {
  title?: string | ReactNode;
  columns: Column[];
  dataSource: any[];
}

const DataTable: React.FC<DataTableProps & BoxProps> = ({
  title,
  columns,
  dataSource,
  ...rest
}) => {
  return (
    <Box
      className="data-table"
      maxW={{ base: '100%', xl: '1200px' }}
      overflow="scroll"
    >
      <Table variant="unstyled" maxw="full" {...rest}>
        {title && <TableCaption>{title}</TableCaption>}
        <Thead>
          <Tr>
            {columns.map(({ title, width }, i) => (
              <Th
                key={i}
                w={width}
                // maxW={width || 150}
                textTransform="unset"
                fontWeight="600"
                letterSpacing="unset"
                fontSize="sm"
                lineHeight="2rem"
              >
                {title}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {dataSource.map((item, i) => (
            <Tr key={i}>
              {columns.map((column, i) => {
                const { dataIndex, key, render } = column;
                return (
                  <Td key={key || dataIndex || i}>
                    {dataIndex
                      ? render
                        ? render(item[dataIndex])
                        : item[dataIndex]
                      : render
                      ? render(item)
                      : ''}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
export default DataTable;
