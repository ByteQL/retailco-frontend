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
  Flex,
  HStack,
} from '@chakra-ui/react';
import BaseSelect from 'components/SelectComponent';

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
    <Box className="data-table" overflow="scroll" minH="50vh">
      <HStack spacing="1rem">
        <BaseSelect
          placeholder="sort by"
          options={[
            { label: 'Date', value: '0' },
            { label: 'Name', value: '1' },
          ]}
        />
        <BaseSelect
          placeholder="filter by"
          options={[
            { label: 'Date', value: '0' },
            { label: 'Name', value: '1' },
          ]}
        />
      </HStack>
      <Table variant="unstyled" {...rest}>
        {title && <TableCaption>{title}</TableCaption>}
        <Thead>
          <Tr>
            {columns.map(({ title, width }, i) => (
              <Th
                key={i}
                w={width}
                textTransform="unset"
                fontWeight="500"
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
