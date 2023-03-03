import { useState } from 'react';
import {
  Box,
  Button,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';
import { removeHtmlTags } from '../../helpers/removeHtmlTags';
import { transformToFullName } from '../../helpers/transformToFullName';
import Image from 'next/image';
import { gothamFont } from '../../helpers/gothamFont';

const Row = (props) => {
  const { row, historic } = props;
  const [open, setOpen] = useState(false);

  const collapseRowBgColor = (i) => {
    if (historic) {
      return {
        backgroundColor: i % 2 ? '#FFEFEF' : '#FFF8F8',
      };
    }

    return {
      backgroundColor: i % 2 ? '#F2F4F4' : '#F8F9F9',
    };
  };

  const handleButtonClick = async (options) => {
    const swaggerJsonString = JSON.stringify({
      swagger: '2.0',
      info: {
        title: 'Ai Management',
        description: 'AI Management API',
        version: '4.0.0',
      },
      host: 'serverRoot',
      basePath: '/tmf-api/AiM/v4/',
      schemes: ['https'],
      consumes: ['application/json;charset=utf-8'],
      produces: ['application/json;charset=utf-8'],
      tags: [
        {
          name: 'aiContractSpecification',
        },
        {
          name: 'aiModel',
        },
        {
          name: 'aiModelSpecification',
        },
        {
          name: 'aiContract',
        },
        {
          name: 'aiContractViolation',
        },
        {
          name: 'alarm',
        },
        {
          name: 'rule',
        },
        {
          name: 'event',
        },
        {
          name: 'monitor',
        },
        {
          name: 'topic',
        },
        {
          name: 'hub',
        },
        {
          name: 'notification listeners (client side)',
        },
        {
          name: 'events subscription',
        },
      ],
      paths: {
        '/aiContractSpecification': {
          get: {
            operationId: 'listAiContractSpecification',
            summary: 'List or find AiContractSpecification objects',
            description:
              'This operation list or find AiContractSpecification entities',
            tags: ['aiContractSpecification'],
            parameters: [
              {
                name: 'fields',
                description:
                  'Comma-separated properties to be provided in response',
                required: false,
                in: 'query',
                type: 'string',
              },
              {
                name: 'offset',
                description:
                  'Requested index for start of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
              {
                name: 'limit',
                description:
                  'Requested number of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                headers: {
                  'X-Result-Count': {
                    description:
                      'Actual number of items returned in the response body',
                    type: 'integer',
                  },
                  'X-Total-Count': {
                    description: 'Total number of items matching criteria',
                    type: 'integer',
                  },
                },
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/AiContractSpecification',
                  },
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          post: {
            operationId: 'createAiContractSpecification',
            summary: 'Creates a AiContractSpecification',
            description:
              'This operation creates a AiContractSpecification entity.',
            tags: ['aiContractSpecification'],
            parameters: [
              {
                name: 'aiContractSpecification',
                description: 'The AiContractSpecification to be created',
                required: true,
                schema: {
                  $ref: '#/definitions/AiContractSpecification_Create',
                },
                in: 'body',
              },
            ],
            responses: {
              201: {
                description: 'Created',
                schema: {
                  $ref: '#/definitions/AiContractSpecification',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/aiContractSpecification/{id}': {
          get: {
            operationId: 'retrieveAiContractSpecification',
            summary: 'Retrieves a AiContractSpecification by ID',
            description:
              'This operation retrieves a AiContractSpecification entity. Attribute selection is enabled for all first level attributes.',
            tags: ['aiContractSpecification'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the AiContractSpecification',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'fields',
                description:
                  'Comma-separated properties to provide in response',
                required: false,
                type: 'string',
                in: 'query',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                schema: {
                  $ref: '#/definitions/AiContractSpecification',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          patch: {
            operationId: 'patchAiContractSpecification',
            summary: 'Updates partially a AiContractSpecification',
            description:
              'This operation updates partially a AiContractSpecification entity.',
            tags: ['aiContractSpecification'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the AiContractSpecification',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'aiContractSpecification',
                description: 'The AiContractSpecification to be updated',
                required: true,
                schema: {
                  $ref: '#/definitions/AiContractSpecification_Update',
                },
                in: 'body',
              },
            ],
            responses: {
              200: {
                description: 'Updated',
                schema: {
                  $ref: '#/definitions/AiContractSpecification',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          delete: {
            operationId: 'deleteAiContractSpecification',
            summary: 'Deletes a AiContractSpecification',
            description:
              'This operation deletes a AiContractSpecification entity.',
            tags: ['aiContractSpecification'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the AiContractSpecification',
                required: true,
                type: 'string',
                in: 'path',
              },
            ],
            responses: {
              204: {
                description: 'Deleted',
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/aiModel': {
          get: {
            operationId: 'listAiModel',
            summary: 'List or find AiModel objects',
            description: 'This operation list or find AiModel entities',
            tags: ['aiModel'],
            parameters: [
              {
                name: 'fields',
                description:
                  'Comma-separated properties to be provided in response',
                required: false,
                in: 'query',
                type: 'string',
              },
              {
                name: 'offset',
                description:
                  'Requested index for start of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
              {
                name: 'limit',
                description:
                  'Requested number of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                headers: {
                  'X-Result-Count': {
                    description:
                      'Actual number of items returned in the response body',
                    type: 'integer',
                  },
                  'X-Total-Count': {
                    description: 'Total number of items matching criteria',
                    type: 'integer',
                  },
                },
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/AiModel',
                  },
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          post: {
            operationId: 'createAiModel',
            summary: 'Creates a AiModel',
            description: 'This operation creates a AiModel entity.',
            tags: ['aiModel'],
            parameters: [
              {
                name: 'aiModel',
                description: 'The AiModel to be created',
                required: true,
                schema: {
                  $ref: '#/definitions/AiModel_Create',
                },
                in: 'body',
              },
            ],
            responses: {
              201: {
                description: 'Created',
                schema: {
                  $ref: '#/definitions/AiModel',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/aiModel/{id}': {
          get: {
            operationId: 'retrieveAiModel',
            summary: 'Retrieves a AiModel by ID',
            description:
              'This operation retrieves a AiModel entity. Attribute selection is enabled for all first level attributes.',
            tags: ['aiModel'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the AiModel',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'fields',
                description:
                  'Comma-separated properties to provide in response',
                required: false,
                type: 'string',
                in: 'query',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                schema: {
                  $ref: '#/definitions/AiModel',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          patch: {
            operationId: 'patchAiModel',
            summary: 'Updates partially a AiModel',
            description: 'This operation updates partially a AiModel entity.',
            tags: ['aiModel'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the AiModel',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'aiModel',
                description: 'The AiModel to be updated',
                required: true,
                schema: {
                  $ref: '#/definitions/AiModel_Update',
                },
                in: 'body',
              },
            ],
            responses: {
              200: {
                description: 'Updated',
                schema: {
                  $ref: '#/definitions/AiModel',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          delete: {
            operationId: 'deleteAiModel',
            summary: 'Deletes a AiModel',
            description: 'This operation deletes a AiModel entity.',
            tags: ['aiModel'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the AiModel',
                required: true,
                type: 'string',
                in: 'path',
              },
            ],
            responses: {
              204: {
                description: 'Deleted',
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/aiModelSpecification': {
          get: {
            operationId: 'listAiModelSpecification',
            summary: 'List or find AiModelSpecification objects',
            description:
              'This operation list or find AiModelSpecification entities',
            tags: ['aiModelSpecification'],
            parameters: [
              {
                name: 'fields',
                description:
                  'Comma-separated properties to be provided in response',
                required: false,
                in: 'query',
                type: 'string',
              },
              {
                name: 'offset',
                description:
                  'Requested index for start of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
              {
                name: 'limit',
                description:
                  'Requested number of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                headers: {
                  'X-Result-Count': {
                    description:
                      'Actual number of items returned in the response body',
                    type: 'integer',
                  },
                  'X-Total-Count': {
                    description: 'Total number of items matching criteria',
                    type: 'integer',
                  },
                },
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/AiModelSpecification',
                  },
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          post: {
            operationId: 'createAiModelSpecification',
            summary: 'Creates a AiModelSpecification',
            description:
              'This operation creates a AiModelSpecification entity.',
            tags: ['aiModelSpecification'],
            parameters: [
              {
                name: 'aiModelSpecification',
                description: 'The AiModelSpecification to be created',
                required: true,
                schema: {
                  $ref: '#/definitions/AiModelSpecification_Create',
                },
                in: 'body',
              },
            ],
            responses: {
              201: {
                description: 'Created',
                schema: {
                  $ref: '#/definitions/AiModelSpecification',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/aiModelSpecification/{id}': {
          get: {
            operationId: 'retrieveAiModelSpecification',
            summary: 'Retrieves a AiModelSpecification by ID',
            description:
              'This operation retrieves a AiModelSpecification entity. Attribute selection is enabled for all first level attributes.',
            tags: ['aiModelSpecification'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the AiModelSpecification',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'fields',
                description:
                  'Comma-separated properties to provide in response',
                required: false,
                type: 'string',
                in: 'query',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                schema: {
                  $ref: '#/definitions/AiModelSpecification',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          patch: {
            operationId: 'patchAiModelSpecification',
            summary: 'Updates partially a AiModelSpecification',
            description:
              'This operation updates partially a AiModelSpecification entity.',
            tags: ['aiModelSpecification'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the AiModelSpecification',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'aiModelSpecification',
                description: 'The AiModelSpecification to be updated',
                required: true,
                schema: {
                  $ref: '#/definitions/AiModelSpecification_Update',
                },
                in: 'body',
              },
            ],
            responses: {
              200: {
                description: 'Updated',
                schema: {
                  $ref: '#/definitions/AiModelSpecification',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          delete: {
            operationId: 'deleteAiModelSpecification',
            summary: 'Deletes a AiModelSpecification',
            description:
              'This operation deletes a AiModelSpecification entity.',
            tags: ['aiModelSpecification'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the AiModelSpecification',
                required: true,
                type: 'string',
                in: 'path',
              },
            ],
            responses: {
              204: {
                description: 'Deleted',
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/aiContract': {
          get: {
            operationId: 'listAiContract',
            summary: 'List or find AiContract objects',
            description: 'This operation list or find AiContract entities',
            tags: ['aiContract'],
            parameters: [
              {
                name: 'fields',
                description:
                  'Comma-separated properties to be provided in response',
                required: false,
                in: 'query',
                type: 'string',
              },
              {
                name: 'offset',
                description:
                  'Requested index for start of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
              {
                name: 'limit',
                description:
                  'Requested number of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                headers: {
                  'X-Result-Count': {
                    description:
                      'Actual number of items returned in the response body',
                    type: 'integer',
                  },
                  'X-Total-Count': {
                    description: 'Total number of items matching criteria',
                    type: 'integer',
                  },
                },
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/AiContract',
                  },
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          post: {
            operationId: 'createAiContract',
            summary: 'Creates a AiContract',
            description: 'This operation creates a AiContract entity.',
            tags: ['aiContract'],
            parameters: [
              {
                name: 'aiContract',
                description: 'The AiContract to be created',
                required: true,
                schema: {
                  $ref: '#/definitions/AiContract_Create',
                },
                in: 'body',
              },
            ],
            responses: {
              201: {
                description: 'Created',
                schema: {
                  $ref: '#/definitions/AiContract',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/aiContract/{id}': {
          get: {
            operationId: 'retrieveAiContract',
            summary: 'Retrieves a AiContract by ID',
            description:
              'This operation retrieves a AiContract entity. Attribute selection is enabled for all first level attributes.',
            tags: ['aiContract'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the AiContract',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'fields',
                description:
                  'Comma-separated properties to provide in response',
                required: false,
                type: 'string',
                in: 'query',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                schema: {
                  $ref: '#/definitions/AiContract',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          patch: {
            operationId: 'patchAiContract',
            summary: 'Updates partially a AiContract',
            description:
              'This operation updates partially a AiContract entity.',
            tags: ['aiContract'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the AiContract',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'aiContract',
                description: 'The AiContract to be updated',
                required: true,
                schema: {
                  $ref: '#/definitions/AiContract_Update',
                },
                in: 'body',
              },
            ],
            responses: {
              200: {
                description: 'Updated',
                schema: {
                  $ref: '#/definitions/AiContract',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          delete: {
            operationId: 'deleteAiContract',
            summary: 'Deletes a AiContract',
            description: 'This operation deletes a AiContract entity.',
            tags: ['aiContract'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the AiContract',
                required: true,
                type: 'string',
                in: 'path',
              },
            ],
            responses: {
              204: {
                description: 'Deleted',
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/aiContractViolation': {
          get: {
            operationId: 'listAiContractViolation',
            summary: 'List or find AiContractViolation objects',
            description:
              'This operation list or find AiContractViolation entities',
            tags: ['aiContractViolation'],
            parameters: [
              {
                name: 'fields',
                description:
                  'Comma-separated properties to be provided in response',
                required: false,
                in: 'query',
                type: 'string',
              },
              {
                name: 'offset',
                description:
                  'Requested index for start of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
              {
                name: 'limit',
                description:
                  'Requested number of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                headers: {
                  'X-Result-Count': {
                    description:
                      'Actual number of items returned in the response body',
                    type: 'integer',
                  },
                  'X-Total-Count': {
                    description: 'Total number of items matching criteria',
                    type: 'integer',
                  },
                },
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/AiContractViolation',
                  },
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          post: {
            operationId: 'createAiContractViolation',
            summary: 'Creates a AiContractViolation',
            description: 'This operation creates a AiContractViolation entity.',
            tags: ['aiContractViolation'],
            parameters: [
              {
                name: 'aiContractViolation',
                description: 'The AiContractViolation to be created',
                required: true,
                schema: {
                  $ref: '#/definitions/AiContractViolation_Create',
                },
                in: 'body',
              },
            ],
            responses: {
              201: {
                description: 'Created',
                schema: {
                  $ref: '#/definitions/AiContractViolation',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/aiContractViolation/{id}': {
          get: {
            operationId: 'retrieveAiContractViolation',
            summary: 'Retrieves a AiContractViolation by ID',
            description:
              'This operation retrieves a AiContractViolation entity. Attribute selection is enabled for all first level attributes.',
            tags: ['aiContractViolation'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the AiContractViolation',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'fields',
                description:
                  'Comma-separated properties to provide in response',
                required: false,
                type: 'string',
                in: 'query',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                schema: {
                  $ref: '#/definitions/AiContractViolation',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/alarm': {
          get: {
            operationId: 'listAlarm',
            summary: 'List or find Alarm objects',
            description: 'This operation list or find Alarm entities',
            tags: ['alarm'],
            parameters: [
              {
                name: 'fields',
                description:
                  'Comma-separated properties to be provided in response',
                required: false,
                in: 'query',
                type: 'string',
              },
              {
                name: 'offset',
                description:
                  'Requested index for start of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
              {
                name: 'limit',
                description:
                  'Requested number of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                headers: {
                  'X-Result-Count': {
                    description:
                      'Actual number of items returned in the response body',
                    type: 'integer',
                  },
                  'X-Total-Count': {
                    description: 'Total number of items matching criteria',
                    type: 'integer',
                  },
                },
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Alarm',
                  },
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          post: {
            operationId: 'createAlarm',
            summary: 'Creates a Alarm',
            description: 'This operation creates a Alarm entity.',
            tags: ['alarm'],
            parameters: [
              {
                name: 'alarm',
                description: 'The Alarm to be created',
                required: true,
                schema: {
                  $ref: '#/definitions/Alarm_Create',
                },
                in: 'body',
              },
            ],
            responses: {
              201: {
                description: 'Created',
                schema: {
                  $ref: '#/definitions/Alarm',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/alarm/{id}': {
          get: {
            operationId: 'retrieveAlarm',
            summary: 'Retrieves a Alarm by ID',
            description:
              'This operation retrieves a Alarm entity. Attribute selection is enabled for all first level attributes.',
            tags: ['alarm'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the Alarm',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'fields',
                description:
                  'Comma-separated properties to provide in response',
                required: false,
                type: 'string',
                in: 'query',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                schema: {
                  $ref: '#/definitions/Alarm',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          patch: {
            operationId: 'patchAlarm',
            summary: 'Updates partially a Alarm',
            description: 'This operation updates partially a Alarm entity.',
            tags: ['alarm'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the Alarm',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'alarm',
                description: 'The Alarm to be updated',
                required: true,
                schema: {
                  $ref: '#/definitions/Alarm_Update',
                },
                in: 'body',
              },
            ],
            responses: {
              200: {
                description: 'Updated',
                schema: {
                  $ref: '#/definitions/Alarm',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          delete: {
            operationId: 'deleteAlarm',
            summary: 'Deletes a Alarm',
            description: 'This operation deletes a Alarm entity.',
            tags: ['alarm'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the Alarm',
                required: true,
                type: 'string',
                in: 'path',
              },
            ],
            responses: {
              204: {
                description: 'Deleted',
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/rule': {
          get: {
            operationId: 'listRule',
            summary: 'List or find Rule objects',
            description: 'This operation list or find Rule entities',
            tags: ['rule'],
            parameters: [
              {
                name: 'fields',
                description:
                  'Comma-separated properties to be provided in response',
                required: false,
                in: 'query',
                type: 'string',
              },
              {
                name: 'offset',
                description:
                  'Requested index for start of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
              {
                name: 'limit',
                description:
                  'Requested number of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                headers: {
                  'X-Result-Count': {
                    description:
                      'Actual number of items returned in the response body',
                    type: 'integer',
                  },
                  'X-Total-Count': {
                    description: 'Total number of items matching criteria',
                    type: 'integer',
                  },
                },
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Rule',
                  },
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          post: {
            operationId: 'createRule',
            summary: 'Creates a Rule',
            description: 'This operation creates a Rule entity.',
            tags: ['rule'],
            parameters: [
              {
                name: 'rule',
                description: 'The Rule to be created',
                required: true,
                schema: {
                  $ref: '#/definitions/Rule_Create',
                },
                in: 'body',
              },
            ],
            responses: {
              201: {
                description: 'Created',
                schema: {
                  $ref: '#/definitions/Rule',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/rule/{id}': {
          get: {
            operationId: 'retrieveRule',
            summary: 'Retrieves a Rule by ID',
            description:
              'This operation retrieves a Rule entity. Attribute selection is enabled for all first level attributes.',
            tags: ['rule'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the Rule',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'fields',
                description:
                  'Comma-separated properties to provide in response',
                required: false,
                type: 'string',
                in: 'query',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                schema: {
                  $ref: '#/definitions/Rule',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          delete: {
            operationId: 'deleteRule',
            summary: 'Deletes a Rule',
            description: 'This operation deletes a Rule entity.',
            tags: ['rule'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the Rule',
                required: true,
                type: 'string',
                in: 'path',
              },
            ],
            responses: {
              204: {
                description: 'Deleted',
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          patch: {
            operationId: 'patchRule',
            summary: 'Updates partially a Rule',
            description: 'This operation updates partially a Rule entity.',
            tags: ['rule'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the Rule',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'rule',
                description: 'The Rule to be updated',
                required: true,
                schema: {
                  $ref: '#/definitions/Rule_Update',
                },
                in: 'body',
              },
            ],
            responses: {
              200: {
                description: 'Updated',
                schema: {
                  $ref: '#/definitions/Rule',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/topic/{topicId}/event': {
          get: {
            operationId: 'listEvent',
            summary: 'List or find Event objects',
            description: 'This operation list or find Event entities',
            tags: ['event'],
            parameters: [
              {
                name: 'topicId',
                description: 'Identifier of the parent Topic entity',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'fields',
                description:
                  'Comma-separated properties to be provided in response',
                required: false,
                in: 'query',
                type: 'string',
              },
              {
                name: 'offset',
                description:
                  'Requested index for start of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
              {
                name: 'limit',
                description:
                  'Requested number of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                headers: {
                  'X-Result-Count': {
                    description:
                      'Actual number of items returned in the response body',
                    type: 'integer',
                  },
                  'X-Total-Count': {
                    description: 'Total number of items matching criteria',
                    type: 'integer',
                  },
                },
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Event',
                  },
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          post: {
            operationId: 'createEvent',
            summary: 'Creates a Event',
            description: 'This operation creates a Event entity.',
            tags: ['event'],
            parameters: [
              {
                name: 'topicId',
                description: 'Identifier of the parent Topic entity',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'event',
                description: 'The Event to be created',
                required: true,
                schema: {
                  $ref: '#/definitions/Event_Create',
                },
                in: 'body',
              },
            ],
            responses: {
              201: {
                description: 'Created',
                schema: {
                  $ref: '#/definitions/Event',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/topic/{topicId}/event/{id}': {
          get: {
            operationId: 'retrieveEvent',
            summary: 'Retrieves a Event by ID',
            description:
              'This operation retrieves a Event entity. Attribute selection is enabled for all first level attributes.',
            tags: ['event'],
            parameters: [
              {
                name: 'topicId',
                description: 'Identifier of the parent Topic entity',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'id',
                description: 'Identifier of the Event',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'fields',
                description:
                  'Comma-separated properties to provide in response',
                required: false,
                type: 'string',
                in: 'query',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                schema: {
                  $ref: '#/definitions/Event',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/monitor': {
          get: {
            operationId: 'listMonitor',
            summary: 'List or find Monitor objects',
            description: 'This operation list or find Monitor entities',
            tags: ['monitor'],
            parameters: [
              {
                name: 'fields',
                description:
                  'Comma-separated properties to be provided in response',
                required: false,
                in: 'query',
                type: 'string',
              },
              {
                name: 'offset',
                description:
                  'Requested index for start of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
              {
                name: 'limit',
                description:
                  'Requested number of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                headers: {
                  'X-Result-Count': {
                    description:
                      'Actual number of items returned in the response body',
                    type: 'integer',
                  },
                  'X-Total-Count': {
                    description: 'Total number of items matching criteria',
                    type: 'integer',
                  },
                },
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Monitor',
                  },
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/monitor/{id}': {
          get: {
            operationId: 'retrieveMonitor',
            summary: 'Retrieves a Monitor by ID',
            description:
              'This operation retrieves a Monitor entity. Attribute selection is enabled for all first level attributes.',
            tags: ['monitor'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the Monitor',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'fields',
                description:
                  'Comma-separated properties to provide in response',
                required: false,
                type: 'string',
                in: 'query',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                schema: {
                  $ref: '#/definitions/Monitor',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/topic': {
          get: {
            operationId: 'listTopic',
            summary: 'List or find Topic objects',
            description: 'This operation list or find Topic entities',
            tags: ['topic'],
            parameters: [
              {
                name: 'fields',
                description:
                  'Comma-separated properties to be provided in response',
                required: false,
                in: 'query',
                type: 'string',
              },
              {
                name: 'offset',
                description:
                  'Requested index for start of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
              {
                name: 'limit',
                description:
                  'Requested number of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                headers: {
                  'X-Result-Count': {
                    description:
                      'Actual number of items returned in the response body',
                    type: 'integer',
                  },
                  'X-Total-Count': {
                    description: 'Total number of items matching criteria',
                    type: 'integer',
                  },
                },
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Topic',
                  },
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          post: {
            operationId: 'createTopic',
            summary: 'Creates a Topic',
            description: 'This operation creates a Topic entity.',
            tags: ['topic'],
            parameters: [
              {
                name: 'topic',
                description: 'The Topic to be created',
                required: true,
                schema: {
                  $ref: '#/definitions/Topic_Create',
                },
                in: 'body',
              },
            ],
            responses: {
              201: {
                description: 'Created',
                schema: {
                  $ref: '#/definitions/Topic',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/topic/{id}': {
          get: {
            operationId: 'retrieveTopic',
            summary: 'Retrieves a Topic by ID',
            description:
              'This operation retrieves a Topic entity. Attribute selection is enabled for all first level attributes.',
            tags: ['topic'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the Topic',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'fields',
                description:
                  'Comma-separated properties to provide in response',
                required: false,
                type: 'string',
                in: 'query',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                schema: {
                  $ref: '#/definitions/Topic',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          delete: {
            operationId: 'deleteTopic',
            summary: 'Deletes a Topic',
            description: 'This operation deletes a Topic entity.',
            tags: ['topic'],
            parameters: [
              {
                name: 'id',
                description: 'Identifier of the Topic',
                required: true,
                type: 'string',
                in: 'path',
              },
            ],
            responses: {
              204: {
                description: 'Deleted',
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/topic/{topicId}/hub': {
          get: {
            operationId: 'listHub',
            summary: 'List or find Hub objects',
            description: 'This operation list or find Hub entities',
            tags: ['hub'],
            parameters: [
              {
                name: 'topicId',
                description: 'Identifier of the parent Topic entity',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'fields',
                description:
                  'Comma-separated properties to be provided in response',
                required: false,
                in: 'query',
                type: 'string',
              },
              {
                name: 'offset',
                description:
                  'Requested index for start of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
              {
                name: 'limit',
                description:
                  'Requested number of resources to be provided in response',
                required: false,
                in: 'query',
                type: 'integer',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                headers: {
                  'X-Result-Count': {
                    description:
                      'Actual number of items returned in the response body',
                    type: 'integer',
                  },
                  'X-Total-Count': {
                    description: 'Total number of items matching criteria',
                    type: 'integer',
                  },
                },
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Hub',
                  },
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          post: {
            operationId: 'createHub',
            summary: 'Creates a Hub',
            description: 'This operation creates a Hub entity.',
            tags: ['hub'],
            parameters: [
              {
                name: 'topicId',
                description: 'Identifier of the parent Topic entity',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'hub',
                description: 'The Hub to be created',
                required: true,
                schema: {
                  $ref: '#/definitions/Hub_Create',
                },
                in: 'body',
              },
            ],
            responses: {
              201: {
                description: 'Created',
                schema: {
                  $ref: '#/definitions/Hub',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/topic/{topicId}/hub/{id}': {
          get: {
            operationId: 'retrieveHub',
            summary: 'Retrieves a Hub by ID',
            description:
              'This operation retrieves a Hub entity. Attribute selection is enabled for all first level attributes.',
            tags: ['hub'],
            parameters: [
              {
                name: 'topicId',
                description: 'Identifier of the parent Topic entity',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'id',
                description: 'Identifier of the Hub',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'fields',
                description:
                  'Comma-separated properties to provide in response',
                required: false,
                type: 'string',
                in: 'query',
              },
            ],
            responses: {
              200: {
                description: 'Success',
                schema: {
                  $ref: '#/definitions/Hub',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
          delete: {
            operationId: 'deleteHub',
            summary: 'Deletes a Hub',
            description: 'This operation deletes a Hub entity.',
            tags: ['hub'],
            parameters: [
              {
                name: 'topicId',
                description: 'Identifier of the parent Topic entity',
                required: true,
                type: 'string',
                in: 'path',
              },
              {
                name: 'id',
                description: 'Identifier of the Hub',
                required: true,
                type: 'string',
                in: 'path',
              },
            ],
            responses: {
              204: {
                description: 'Deleted',
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/hub': {
          post: {
            operationId: 'registerListener',
            summary: 'Register a listener',
            description:
              'Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.',
            tags: ['events subscription'],
            parameters: [
              {
                name: 'data',
                schema: {
                  $ref: '#/definitions/EventSubscriptionInput',
                },
                required: true,
                in: 'body',
                description:
                  'Data containing the callback endpoint to deliver the information',
              },
            ],
            responses: {
              201: {
                description: 'Subscribed',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/hub/{id}': {
          delete: {
            operationId: 'unregisterListener',
            summary: 'Unregister a listener',
            description:
              'Resets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.',
            tags: ['events subscription'],
            parameters: [
              {
                name: 'id',
                type: 'string',
                required: true,
                in: 'path',
                description: 'The id of the registered listener',
              },
            ],
            responses: {
              204: {
                description: 'Deleted',
              },
              400: {
                description: 'Bad request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiContractSpecificationCreateEvent': {
          post: {
            operationId: 'listenToAiContractSpecificationCreateEvent',
            summary:
              'Client listener for entity AiContractSpecificationCreateEvent',
            description:
              'Example of a client listener for receiving the notification AiContractSpecificationCreateEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiContractSpecificationCreateEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiContractSpecificationDeleteEvent': {
          post: {
            operationId: 'listenToAiContractSpecificationDeleteEvent',
            summary:
              'Client listener for entity AiContractSpecificationDeleteEvent',
            description:
              'Example of a client listener for receiving the notification AiContractSpecificationDeleteEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiContractSpecificationDeleteEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiContractSpecificationAttributeValueChangeEvent': {
          post: {
            operationId:
              'listenToAiContractSpecificationAttributeValueChangeEvent',
            summary:
              'Client listener for entity AiContractSpecificationAttributeValueChangeEvent',
            description:
              'Example of a client listener for receiving the notification AiContractSpecificationAttributeValueChangeEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiContractSpecificationAttributeValueChangeEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiModelCreateEvent': {
          post: {
            operationId: 'listenToAiModelCreateEvent',
            summary: 'Client listener for entity AiModelCreateEvent',
            description:
              'Example of a client listener for receiving the notification AiModelCreateEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiModelCreateEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiModelAttributeValueChangeEvent': {
          post: {
            operationId: 'listenToAiModelAttributeValueChangeEvent',
            summary:
              'Client listener for entity AiModelAttributeValueChangeEvent',
            description:
              'Example of a client listener for receiving the notification AiModelAttributeValueChangeEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiModelAttributeValueChangeEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiModelStateChangeEvent': {
          post: {
            operationId: 'listenToAiModelStateChangeEvent',
            summary: 'Client listener for entity AiModelStateChangeEvent',
            description:
              'Example of a client listener for receiving the notification AiModelStateChangeEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiModelStateChangeEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiModelDeleteEvent': {
          post: {
            operationId: 'listenToAiModelDeleteEvent',
            summary: 'Client listener for entity AiModelDeleteEvent',
            description:
              'Example of a client listener for receiving the notification AiModelDeleteEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiModelDeleteEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiModelSpecificationCreateEvent': {
          post: {
            operationId: 'listenToAiModelSpecificationCreateEvent',
            summary:
              'Client listener for entity AiModelSpecificationCreateEvent',
            description:
              'Example of a client listener for receiving the notification AiModelSpecificationCreateEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiModelSpecificationCreateEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiModelSpecificationDeleteEvent': {
          post: {
            operationId: 'listenToAiModelSpecificationDeleteEvent',
            summary:
              'Client listener for entity AiModelSpecificationDeleteEvent',
            description:
              'Example of a client listener for receiving the notification AiModelSpecificationDeleteEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiModelSpecificationDeleteEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiModelSpecificationAttributeValueChangeEvent': {
          post: {
            operationId:
              'listenToAiModelSpecificationAttributeValueChangeEvent',
            summary:
              'Client listener for entity AiModelSpecificationAttributeValueChangeEvent',
            description:
              'Example of a client listener for receiving the notification AiModelSpecificationAttributeValueChangeEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiModelSpecificationAttributeValueChangeEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiContractCreateEvent': {
          post: {
            operationId: 'listenToAiContractCreateEvent',
            summary: 'Client listener for entity AiContractCreateEvent',
            description:
              'Example of a client listener for receiving the notification AiContractCreateEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiContractCreateEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiContractAttributeValueChangeEvent': {
          post: {
            operationId: 'listenToAiContractAttributeValueChangeEvent',
            summary:
              'Client listener for entity AiContractAttributeValueChangeEvent',
            description:
              'Example of a client listener for receiving the notification AiContractAttributeValueChangeEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiContractAttributeValueChangeEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiContractStateChangeEvent': {
          post: {
            operationId: 'listenToAiContractStateChangeEvent',
            summary: 'Client listener for entity AiContractStateChangeEvent',
            description:
              'Example of a client listener for receiving the notification AiContractStateChangeEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiContractStateChangeEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiContractDeleteEvent': {
          post: {
            operationId: 'listenToAiContractDeleteEvent',
            summary: 'Client listener for entity AiContractDeleteEvent',
            description:
              'Example of a client listener for receiving the notification AiContractDeleteEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiContractDeleteEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiContractViolationCreateEvent': {
          post: {
            operationId: 'listenToAiContractViolationCreateEvent',
            summary:
              'Client listener for entity AiContractViolationCreateEvent',
            description:
              'Example of a client listener for receiving the notification AiContractViolationCreateEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiContractViolationCreateEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiContractViolationAttributeValueChangeEvent': {
          post: {
            operationId: 'listenToAiContractViolationAttributeValueChangeEvent',
            summary:
              'Client listener for entity AiContractViolationAttributeValueChangeEvent',
            description:
              'Example of a client listener for receiving the notification AiContractViolationAttributeValueChangeEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiContractViolationAttributeValueChangeEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/aiContractViolationDeleteEvent': {
          post: {
            operationId: 'listenToAiContractViolationDeleteEvent',
            summary:
              'Client listener for entity AiContractViolationDeleteEvent',
            description:
              'Example of a client listener for receiving the notification AiContractViolationDeleteEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AiContractViolationDeleteEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/alarmCreateEvent': {
          post: {
            operationId: 'listenToAlarmCreateEvent',
            summary: 'Client listener for entity AlarmCreateEvent',
            description:
              'Example of a client listener for receiving the notification AlarmCreateEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AlarmCreateEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/alarmAttributeValueChangeEvent': {
          post: {
            operationId: 'listenToAlarmAttributeValueChangeEvent',
            summary:
              'Client listener for entity AlarmAttributeValueChangeEvent',
            description:
              'Example of a client listener for receiving the notification AlarmAttributeValueChangeEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AlarmAttributeValueChangeEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/alarmStateChangeEvent': {
          post: {
            operationId: 'listenToAlarmStateChangeEvent',
            summary: 'Client listener for entity AlarmStateChangeEvent',
            description:
              'Example of a client listener for receiving the notification AlarmStateChangeEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AlarmStateChangeEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/alarmDeleteEvent': {
          post: {
            operationId: 'listenToAlarmDeleteEvent',
            summary: 'Client listener for entity AlarmDeleteEvent',
            description:
              'Example of a client listener for receiving the notification AlarmDeleteEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/AlarmDeleteEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/ruleCreateEvent': {
          post: {
            operationId: 'listenToRuleCreateEvent',
            summary: 'Client listener for entity RuleCreateEvent',
            description:
              'Example of a client listener for receiving the notification RuleCreateEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/RuleCreateEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/ruleAttributeValueChangeEvent': {
          post: {
            operationId: 'listenToRuleAttributeValueChangeEvent',
            summary: 'Client listener for entity RuleAttributeValueChangeEvent',
            description:
              'Example of a client listener for receiving the notification RuleAttributeValueChangeEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/RuleAttributeValueChangeEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/ruleStateChangeEvent': {
          post: {
            operationId: 'listenToRuleStateChangeEvent',
            summary: 'Client listener for entity RuleStateChangeEvent',
            description:
              'Example of a client listener for receiving the notification RuleStateChangeEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/RuleStateChangeEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/ruleDeleteEvent': {
          post: {
            operationId: 'listenToRuleDeleteEvent',
            summary: 'Client listener for entity RuleDeleteEvent',
            description:
              'Example of a client listener for receiving the notification RuleDeleteEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/RuleDeleteEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/eventCreateEvent': {
          post: {
            operationId: 'listenToEventCreateEvent',
            summary: 'Client listener for entity EventCreateEvent',
            description:
              'Example of a client listener for receiving the notification EventCreateEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/EventCreateEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/monitorCreateEvent': {
          post: {
            operationId: 'listenToMonitorCreateEvent',
            summary: 'Client listener for entity MonitorCreateEvent',
            description:
              'Example of a client listener for receiving the notification MonitorCreateEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/MonitorCreateEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/monitorAttributeValueChangeEvent': {
          post: {
            operationId: 'listenToMonitorAttributeValueChangeEvent',
            summary:
              'Client listener for entity MonitorAttributeValueChangeEvent',
            description:
              'Example of a client listener for receiving the notification MonitorAttributeValueChangeEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/MonitorAttributeValueChangeEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/monitorStateChangeEvent': {
          post: {
            operationId: 'listenToMonitorStateChangeEvent',
            summary: 'Client listener for entity MonitorStateChangeEvent',
            description:
              'Example of a client listener for receiving the notification MonitorStateChangeEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/MonitorStateChangeEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/monitorDeleteEvent': {
          post: {
            operationId: 'listenToMonitorDeleteEvent',
            summary: 'Client listener for entity MonitorDeleteEvent',
            description:
              'Example of a client listener for receiving the notification MonitorDeleteEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/MonitorDeleteEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/topicCreateEvent': {
          post: {
            operationId: 'listenToTopicCreateEvent',
            summary: 'Client listener for entity TopicCreateEvent',
            description:
              'Example of a client listener for receiving the notification TopicCreateEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/TopicCreateEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/topicChangeEvent': {
          post: {
            operationId: 'listenToTopicChangeEvent',
            summary: 'Client listener for entity TopicChangeEvent',
            description:
              'Example of a client listener for receiving the notification TopicChangeEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/TopicChangeEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
        '/listener/topicDeleteEvent': {
          post: {
            operationId: 'listenToTopicDeleteEvent',
            summary: 'Client listener for entity TopicDeleteEvent',
            description:
              'Example of a client listener for receiving the notification TopicDeleteEvent',
            tags: ['notification listeners (client side)'],
            parameters: [
              {
                name: 'data',
                required: true,
                in: 'body',
                description: 'The event data',
                schema: {
                  $ref: '#/definitions/TopicDeleteEvent',
                },
              },
            ],
            responses: {
              201: {
                description: 'Notified',
                schema: {
                  $ref: '#/definitions/EventSubscription',
                },
              },
              400: {
                description: 'Bad Request',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              403: {
                description: 'Forbidden',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              404: {
                description: 'Not Found',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              405: {
                description: 'Method Not allowed',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              409: {
                description: 'Conflict',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
              500: {
                description: 'Internal Server Error',
                schema: {
                  $ref: '#/definitions/Error',
                },
              },
            },
          },
        },
      },
      definitions: {
        Addressable: {
          type: 'object',
          description: 'Base schema for adressable entities',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
          },
        },
        AffectedService: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            href: {
              type: 'string',
              description:
                'Provides the identifier of the service affected by the alarm',
            },
          },
        },
        AiContract: {
          type: 'object',
          description:
            'An Ai Contract represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications.',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            approvalDate: {
              type: 'string',
              format: 'date-time',
            },
            approved: {
              type: 'boolean',
            },
            description: {
              type: 'string',
              description: 'Description of the Service Level Agreement (SLA)',
            },
            name: {
              type: 'string',
              description: 'Name of the Service Level Agreement (SLA)',
            },
            state: {
              type: 'string',
              description: 'State of the Service Level Agreement (SLA)',
            },
            version: {
              type: 'string',
              description: 'Version of the Service Level Agreement (SLA)',
            },
            aiContractSpecification: {
              $ref: '#/definitions/EntityRef',
              description: 'Reference to the AI Model Specification',
            },
            aiModel: {
              $ref: '#/definitions/EntityRef',
              description: 'Reference to the AI Model ',
            },
            characteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/Characteristic',
              },
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
            },
            rule: {
              type: 'array',
              items: {
                $ref: '#/definitions/Rule',
              },
            },
            template: {
              $ref: '#/definitions/TemplateRef',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description: 'Period where the clauses of the SLA are applicable',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        AiContract_Create: {
          type: 'object',
          description:
            'An Ai Contract represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications.\nSkipped properties: id,href',
          required: [
            'state',
            'aiContractSpecification',
            'relatedParty',
            'aiModel',
          ],
          properties: {
            approvalDate: {
              type: 'string',
              format: 'date-time',
            },
            approved: {
              type: 'boolean',
            },
            description: {
              type: 'string',
              description: 'Description of the Service Level Agreement (SLA)',
            },
            name: {
              type: 'string',
              description: 'Name of the Service Level Agreement (SLA)',
            },
            state: {
              type: 'string',
              description: 'State of the Service Level Agreement (SLA)',
            },
            version: {
              type: 'string',
              description: 'Version of the Service Level Agreement (SLA)',
            },
            aiContractSpecification: {
              $ref: '#/definitions/EntityRef',
              description: 'Reference to the AI Model Specification',
            },
            aiModel: {
              $ref: '#/definitions/EntityRef',
              description: 'Reference to the AI Model ',
            },
            characteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/Characteristic',
              },
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
              minItems: 1,
            },
            rule: {
              type: 'array',
              items: {
                $ref: '#/definitions/Rule',
              },
            },
            template: {
              $ref: '#/definitions/TemplateRef',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description: 'Period where the clauses of the SLA are applicable',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        AiContract_Update: {
          type: 'object',
          description:
            'An Ai Contract represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications.\nSkipped properties: id,href',
          properties: {
            approvalDate: {
              type: 'string',
              format: 'date-time',
            },
            approved: {
              type: 'boolean',
            },
            description: {
              type: 'string',
              description: 'Description of the Service Level Agreement (SLA)',
            },
            name: {
              type: 'string',
              description: 'Name of the Service Level Agreement (SLA)',
            },
            state: {
              type: 'string',
              description: 'State of the Service Level Agreement (SLA)',
            },
            version: {
              type: 'string',
              description: 'Version of the Service Level Agreement (SLA)',
            },
            aiContractSpecification: {
              $ref: '#/definitions/EntityRef',
              description: 'Reference to the AI Model Specification',
            },
            aiModel: {
              $ref: '#/definitions/EntityRef',
              description: 'Reference to the AI Model ',
            },
            characteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/Characteristic',
              },
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
            },
            rule: {
              type: 'array',
              items: {
                $ref: '#/definitions/Rule',
              },
            },
            template: {
              $ref: '#/definitions/TemplateRef',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description: 'Period where the clauses of the SLA are applicable',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        AiContractSpecification: {
          type: 'object',
          description:
            'A template of an agreement that can be used when establishing partnerships',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            description: {
              type: 'string',
              description: 'Description of the specification',
            },
            isBundle: {
              type: 'boolean',
              description:
                'isBundle determines whether specification represents a single specification (false), or a bundle of specifications (true).',
            },
            lastUpdate: {
              type: 'string',
              format: 'date-time',
              description:
                'Date and time of the last update of the specification',
            },
            lifecycleStatus: {
              type: 'string',
              description:
                'Used to indicate the current lifecycle status of this catalog item',
            },
            name: {
              type: 'string',
              description: 'Name given to the specification',
            },
            version: {
              type: 'string',
              description: 'specification version',
            },
            attachment: {
              type: 'array',
              items: {
                $ref: '#/definitions/AttachmentRefOrValue',
              },
              description:
                'Attachments that may be of relevance to this specification, such as picture, document, media',
            },
            constraint: {
              type: 'array',
              items: {
                $ref: '#/definitions/ConstraintRef',
              },
              description:
                'This is a list of constraint references applied to this specification',
            },
            entitySpecRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/EntitySpecificationRelationship',
              },
              description: 'Relationship to another specification',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
              description:
                'Parties who manage or otherwise have an interest in this specification',
            },
            specCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/CharacteristicSpecification',
              },
              description: 'List of characteristics that the entity can take',
            },
            targetEntitySchema: {
              $ref: '#/definitions/TargetEntitySchema',
              description: 'Pointer to a schema that defines the target entity',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description: 'The period for which this REST resource is valid',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        AiContractSpecification_Create: {
          type: 'object',
          description:
            'A template of an agreement that can be used when establishing partnerships\nSkipped properties: id,href',
          required: ['name'],
          properties: {
            description: {
              type: 'string',
              description: 'Description of the specification',
            },
            isBundle: {
              type: 'boolean',
              description:
                'isBundle determines whether specification represents a single specification (false), or a bundle of specifications (true).',
            },
            lastUpdate: {
              type: 'string',
              format: 'date-time',
              description:
                'Date and time of the last update of the specification',
            },
            lifecycleStatus: {
              type: 'string',
              description:
                'Used to indicate the current lifecycle status of this catalog item',
            },
            name: {
              type: 'string',
              description: 'Name given to the specification',
            },
            version: {
              type: 'string',
              description: 'specification version',
            },
            attachment: {
              type: 'array',
              items: {
                $ref: '#/definitions/AttachmentRefOrValue',
              },
              description:
                'Attachments that may be of relevance to this specification, such as picture, document, media',
            },
            constraint: {
              type: 'array',
              items: {
                $ref: '#/definitions/ConstraintRef',
              },
              description:
                'This is a list of constraint references applied to this specification',
            },
            entitySpecRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/EntitySpecificationRelationship',
              },
              description: 'Relationship to another specification',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
              description:
                'Parties who manage or otherwise have an interest in this specification',
            },
            specCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/CharacteristicSpecification',
              },
              description: 'List of characteristics that the entity can take',
            },
            targetEntitySchema: {
              $ref: '#/definitions/TargetEntitySchema',
              description: 'Pointer to a schema that defines the target entity',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description: 'The period for which this REST resource is valid',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        AiContractSpecification_Update: {
          type: 'object',
          description:
            'A template of an agreement that can be used when establishing partnerships\nSkipped properties: id,href,lastUpdate',
          properties: {
            description: {
              type: 'string',
              description: 'Description of the specification',
            },
            isBundle: {
              type: 'boolean',
              description:
                'isBundle determines whether specification represents a single specification (false), or a bundle of specifications (true).',
            },
            lifecycleStatus: {
              type: 'string',
              description:
                'Used to indicate the current lifecycle status of this catalog item',
            },
            name: {
              type: 'string',
              description: 'Name given to the specification',
            },
            version: {
              type: 'string',
              description: 'specification version',
            },
            attachment: {
              type: 'array',
              items: {
                $ref: '#/definitions/AttachmentRefOrValue',
              },
              description:
                'Attachments that may be of relevance to this specification, such as picture, document, media',
            },
            constraint: {
              type: 'array',
              items: {
                $ref: '#/definitions/ConstraintRef',
              },
              description:
                'This is a list of constraint references applied to this specification',
            },
            entitySpecRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/EntitySpecificationRelationship',
              },
              description: 'Relationship to another specification',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
              description:
                'Parties who manage or otherwise have an interest in this specification',
            },
            specCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/CharacteristicSpecification',
              },
              description: 'List of characteristics that the entity can take',
            },
            targetEntitySchema: {
              $ref: '#/definitions/TargetEntitySchema',
              description: 'Pointer to a schema that defines the target entity',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description: 'The period for which this REST resource is valid',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        AiContractViolation: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            href: {
              type: 'string',
            },
            date: {
              type: 'string',
              format: 'date-time',
            },
            aiContract: {
              $ref: '#/definitions/EntityRef',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
            },
            violation: {
              $ref: '#/definitions/Violation',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        AiContractViolation_Create: {
          type: 'object',
          description: '\nSkipped properties: id,href',
          required: ['violation', 'aiContract'],
          properties: {
            date: {
              type: 'string',
              format: 'date-time',
            },
            aiContract: {
              $ref: '#/definitions/EntityRef',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
            },
            violation: {
              $ref: '#/definitions/Violation',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        AiModel: {
          type: 'object',
          description:
            'AiModel is a base class for defining the AiModel hierarchy',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            category: {
              type: 'string',
              description: 'Is it a customer facing or resource facing service',
            },
            description: {
              type: 'string',
              description: 'Free-text description of the service',
            },
            endDate: {
              type: 'string',
              format: 'date-time',
              description: 'Date when the service ends',
            },
            hasStarted: {
              type: 'boolean',
              description: 'If TRUE, this Service has already been started',
            },
            isBundle: {
              type: 'boolean',
              description:
                "If true, the service is a ServiceBundle which regroup a service hierachy. If false, the service is a 'atomic' service (hierachy leaf).",
            },
            isServiceEnabled: {
              type: 'boolean',
              description:
                'If FALSE and hasStarted is FALSE, this particular Service has NOT been enabled for use - if FALSE and hasStarted is TRUE then the service has failed ',
            },
            isStateful: {
              type: 'boolean',
              description:
                'If TRUE, this Service can be changed without affecting any other services',
            },
            name: {
              type: 'string',
              description: 'Name of the service',
            },
            serviceDate: {
              type: 'string',
              description:
                'Date when the service was created (whatever its status).',
            },
            serviceType: {
              type: 'string',
              description: 'Business type of the service',
            },
            startDate: {
              type: 'string',
              format: 'date-time',
              description: 'Date when the service starts',
            },
            startMode: {
              type: 'string',
              description:
                'This attribute is an enumerated integer that indicates how the Service is started, such as: 0: Unknown; 1: Automatically by the managed environment; 2: Automatically by the owning device; 3: Manually by the Provider of the Service; 4: Manually by a Customer of the Provider; 5: Any of the above',
            },
            aiModelSpecification: {
              $ref: '#/definitions/AiModelSpecification',
            },
            feature: {
              type: 'array',
              items: {
                $ref: '#/definitions/Feature',
              },
              description: 'A list of feature associated with this service ',
            },
            gpu: {
              $ref: '#/definitions/ResourceRef',
              description: 'Reference to GPU in Inventory',
            },
            note: {
              type: 'array',
              items: {
                $ref: '#/definitions/Note',
              },
              description: 'A list of notes made on this service',
            },
            place: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedPlaceRefOrValue',
              },
              description:
                'A list of places (Place [*]). Used to define a place useful for the service (for example a geographical place whre the service is installed)',
            },
            relatedEntity: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedEntityRefOrValue',
              },
              description:
                'A list of related  entity in relationship with this service ',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
              description:
                'A list of related party references (RelatedParty [*]). A related party defines party or party role linked to a specific entity',
            },
            serviceCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/Characteristic',
              },
              description:
                'A list of characteristics that characterize this service (ServiceCharacteristic [*]) ',
            },
            serviceOrderItem: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedServiceOrderItem',
              },
              description:
                'A list of service order items related to this service',
            },
            serviceRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceRelationship',
              },
              description:
                'A list of service relationships (ServiceRelationship [*]). Describes links with other service(s) in the inventory.',
            },
            serviceSpecification: {
              $ref: '#/definitions/ServiceSpecificationRef',
              description:
                'The specification from which this service was instantiated',
            },
            software: {
              type: 'array',
              items: {
                $ref: '#/definitions/SoftwareRef',
              },
              description: 'Reference to Software in Inventory',
            },
            state: {
              $ref: '#/definitions/ServiceStateType',
              description:
                'The life cycle state of the service, such as designed, reserved, active, etc...',
            },
            supportingResource: {
              type: 'array',
              items: {
                $ref: '#/definitions/ResourceRef',
              },
              description:
                'A list of supporting resources (SupportingResource [*]).Note: only Service of type RFS can be associated with Resources',
            },
            supportingService: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceRefOrValue',
              },
              description:
                'A list of supporting services (SupportingService [*]). A collection of services that support this service (bundling, link CFS to RFS)',
            },
            trainingData: {
              $ref: '#/definitions/EntityRef',
              description: 'Reference to training data set',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        AiModel_Create: {
          type: 'object',
          description:
            'AiModel is a base class for defining the AiModel hierarchy\nSkipped properties: id,href',
          required: ['state', 'aiModelSpecification', 'software'],
          properties: {
            category: {
              type: 'string',
              description: 'Is it a customer facing or resource facing service',
            },
            description: {
              type: 'string',
              description: 'Free-text description of the service',
            },
            endDate: {
              type: 'string',
              format: 'date-time',
              description: 'Date when the service ends',
            },
            hasStarted: {
              type: 'boolean',
              description: 'If TRUE, this Service has already been started',
            },
            isBundle: {
              type: 'boolean',
              description:
                "If true, the service is a ServiceBundle which regroup a service hierachy. If false, the service is a 'atomic' service (hierachy leaf).",
            },
            isServiceEnabled: {
              type: 'boolean',
              description:
                'If FALSE and hasStarted is FALSE, this particular Service has NOT been enabled for use - if FALSE and hasStarted is TRUE then the service has failed ',
            },
            isStateful: {
              type: 'boolean',
              description:
                'If TRUE, this Service can be changed without affecting any other services',
            },
            name: {
              type: 'string',
              description: 'Name of the service',
            },
            serviceDate: {
              type: 'string',
              description:
                'Date when the service was created (whatever its status).',
            },
            serviceType: {
              type: 'string',
              description: 'Business type of the service',
            },
            startDate: {
              type: 'string',
              format: 'date-time',
              description: 'Date when the service starts',
            },
            startMode: {
              type: 'string',
              description:
                'This attribute is an enumerated integer that indicates how the Service is started, such as: 0: Unknown; 1: Automatically by the managed environment; 2: Automatically by the owning device; 3: Manually by the Provider of the Service; 4: Manually by a Customer of the Provider; 5: Any of the above',
            },
            aiModelSpecification: {
              $ref: '#/definitions/AiModelSpecification',
            },
            feature: {
              type: 'array',
              items: {
                $ref: '#/definitions/Feature',
              },
              description: 'A list of feature associated with this service ',
            },
            gpu: {
              $ref: '#/definitions/ResourceRef',
              description: 'Reference to GPU in Inventory',
            },
            note: {
              type: 'array',
              items: {
                $ref: '#/definitions/Note',
              },
              description: 'A list of notes made on this service',
            },
            place: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedPlaceRefOrValue',
              },
              description:
                'A list of places (Place [*]). Used to define a place useful for the service (for example a geographical place whre the service is installed)',
            },
            relatedEntity: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedEntityRefOrValue',
              },
              description:
                'A list of related  entity in relationship with this service ',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
              description:
                'A list of related party references (RelatedParty [*]). A related party defines party or party role linked to a specific entity',
            },
            serviceCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/Characteristic',
              },
              description:
                'A list of characteristics that characterize this service (ServiceCharacteristic [*]) ',
            },
            serviceOrderItem: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedServiceOrderItem',
              },
              description:
                'A list of service order items related to this service',
            },
            serviceRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceRelationship',
              },
              description:
                'A list of service relationships (ServiceRelationship [*]). Describes links with other service(s) in the inventory.',
            },
            serviceSpecification: {
              $ref: '#/definitions/ServiceSpecificationRef',
              description:
                'The specification from which this service was instantiated',
            },
            software: {
              type: 'array',
              items: {
                $ref: '#/definitions/SoftwareRef',
              },
              minItems: 1,
              description: 'Reference to Software in Inventory',
            },
            state: {
              $ref: '#/definitions/ServiceStateType',
              description:
                'The life cycle state of the service, such as designed, reserved, active, etc...',
            },
            supportingResource: {
              type: 'array',
              items: {
                $ref: '#/definitions/ResourceRef',
              },
              description:
                'A list of supporting resources (SupportingResource [*]).Note: only Service of type RFS can be associated with Resources',
            },
            supportingService: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceRefOrValue',
              },
              description:
                'A list of supporting services (SupportingService [*]). A collection of services that support this service (bundling, link CFS to RFS)',
            },
            trainingData: {
              $ref: '#/definitions/EntityRef',
              description: 'Reference to training data set',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        AiModel_Update: {
          type: 'object',
          description:
            'AiModel is a base class for defining the AiModel hierarchy\nSkipped properties: id,href,serviceDate',
          properties: {
            category: {
              type: 'string',
              description: 'Is it a customer facing or resource facing service',
            },
            description: {
              type: 'string',
              description: 'Free-text description of the service',
            },
            endDate: {
              type: 'string',
              format: 'date-time',
              description: 'Date when the service ends',
            },
            hasStarted: {
              type: 'boolean',
              description: 'If TRUE, this Service has already been started',
            },
            isBundle: {
              type: 'boolean',
              description:
                "If true, the service is a ServiceBundle which regroup a service hierachy. If false, the service is a 'atomic' service (hierachy leaf).",
            },
            isServiceEnabled: {
              type: 'boolean',
              description:
                'If FALSE and hasStarted is FALSE, this particular Service has NOT been enabled for use - if FALSE and hasStarted is TRUE then the service has failed ',
            },
            isStateful: {
              type: 'boolean',
              description:
                'If TRUE, this Service can be changed without affecting any other services',
            },
            name: {
              type: 'string',
              description: 'Name of the service',
            },
            serviceType: {
              type: 'string',
              description: 'Business type of the service',
            },
            startDate: {
              type: 'string',
              format: 'date-time',
              description: 'Date when the service starts',
            },
            startMode: {
              type: 'string',
              description:
                'This attribute is an enumerated integer that indicates how the Service is started, such as: 0: Unknown; 1: Automatically by the managed environment; 2: Automatically by the owning device; 3: Manually by the Provider of the Service; 4: Manually by a Customer of the Provider; 5: Any of the above',
            },
            aiModelSpecification: {
              $ref: '#/definitions/AiModelSpecification',
            },
            feature: {
              type: 'array',
              items: {
                $ref: '#/definitions/Feature',
              },
              description: 'A list of feature associated with this service ',
            },
            gpu: {
              $ref: '#/definitions/ResourceRef',
              description: 'Reference to GPU in Inventory',
            },
            note: {
              type: 'array',
              items: {
                $ref: '#/definitions/Note',
              },
              description: 'A list of notes made on this service',
            },
            place: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedPlaceRefOrValue',
              },
              description:
                'A list of places (Place [*]). Used to define a place useful for the service (for example a geographical place whre the service is installed)',
            },
            relatedEntity: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedEntityRefOrValue',
              },
              description:
                'A list of related  entity in relationship with this service ',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
              description:
                'A list of related party references (RelatedParty [*]). A related party defines party or party role linked to a specific entity',
            },
            serviceCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/Characteristic',
              },
              description:
                'A list of characteristics that characterize this service (ServiceCharacteristic [*]) ',
            },
            serviceOrderItem: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedServiceOrderItem',
              },
              description:
                'A list of service order items related to this service',
            },
            serviceRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceRelationship',
              },
              description:
                'A list of service relationships (ServiceRelationship [*]). Describes links with other service(s) in the inventory.',
            },
            serviceSpecification: {
              $ref: '#/definitions/ServiceSpecificationRef',
              description:
                'The specification from which this service was instantiated',
            },
            software: {
              type: 'array',
              items: {
                $ref: '#/definitions/SoftwareRef',
              },
              description: 'Reference to Software in Inventory',
            },
            state: {
              $ref: '#/definitions/ServiceStateType',
              description:
                'The life cycle state of the service, such as designed, reserved, active, etc...',
            },
            supportingResource: {
              type: 'array',
              items: {
                $ref: '#/definitions/ResourceRef',
              },
              description:
                'A list of supporting resources (SupportingResource [*]).Note: only Service of type RFS can be associated with Resources',
            },
            supportingService: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceRefOrValue',
              },
              description:
                'A list of supporting services (SupportingService [*]). A collection of services that support this service (bundling, link CFS to RFS)',
            },
            trainingData: {
              $ref: '#/definitions/EntityRef',
              description: 'Reference to training data set',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        AiModelSpecification: {
          type: 'object',
          description:
            'AiModelSpecification is a class that offers characteristics to describe a type of service.\nFunctionally, it acts as a template by which Services may be instantiated. By sharing the same  specification, these services would therefore share the same set of characteristics.',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            deploymentRecord: {
              type: 'object',
            },
            description: {
              type: 'string',
              description: 'Description of the specification',
            },
            inheritedModel: {
              type: 'object',
            },
            isBundle: {
              type: 'boolean',
              description:
                'isBundle determines whether specification represents a single specification (false), or a bundle of specifications (true).',
            },
            lastUpdate: {
              type: 'string',
              format: 'date-time',
              description:
                'Date and time of the last update of the specification',
            },
            lifecycleStatus: {
              type: 'string',
              description:
                'Used to indicate the current lifecycle status of this catalog item',
            },
            modelContractVersionHistory: {
              type: 'object',
            },
            modelDataSheet: {
              type: 'object',
            },
            modelEvaluationData: {
              type: 'object',
            },
            modelSpecificationHistory: {
              type: 'object',
            },
            modelTrainingData: {
              type: 'object',
            },
            name: {
              type: 'string',
              description: 'Name given to the specification',
            },
            version: {
              type: 'string',
              description: 'specification version',
            },
            attachment: {
              type: 'array',
              items: {
                $ref: '#/definitions/AttachmentRefOrValue',
              },
              description:
                'Attachments that may be of relevance to this specification, such as picture, document, media',
            },
            constraint: {
              type: 'array',
              items: {
                $ref: '#/definitions/ConstraintRef',
              },
              description:
                'This is a list of constraint references applied to this specification',
            },
            entitySpecRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/EntitySpecificationRelationship',
              },
              description: 'Relationship to another specification',
            },
            featureSpecification: {
              type: 'array',
              items: {
                $ref: '#/definitions/FeatureSpecification',
              },
              description: 'A list of Features for this specification.',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
              description:
                'Parties who manage or otherwise have an interest in this specification',
            },
            resourceSpecification: {
              type: 'array',
              items: {
                $ref: '#/definitions/ResourceSpecificationRef',
              },
              description:
                'A list of resource specification references (ResourceSpecificationRef [*]). The ResourceSpecification is required for a service specification with type ResourceFacingServiceSpecification (RFSS).',
            },
            serviceLevelSpecification: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceLevelSpecificationRef',
              },
              description:
                'A list of service level specifications related to this service specification, and which will need to be satisifiable for corresponding service instances; e.g. Gold, Platinum',
            },
            serviceSpecRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceSpecRelationship',
              },
              description:
                'A list of service specifications related to this specification, e.g. migration, substitution, dependency or exclusivity relationship',
            },
            specCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/CharacteristicSpecification',
              },
              description: 'List of characteristics that the entity can take',
            },
            targetEntitySchema: {
              $ref: '#/definitions/TargetEntitySchema',
              description: 'Pointer to a schema that defines the target entity',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description: 'The period for which this REST resource is valid',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        AiModelSpecification_Create: {
          type: 'object',
          description:
            'AiModelSpecification is a class that offers characteristics to describe a type of service.\nFunctionally, it acts as a template by which Services may be instantiated. By sharing the same  specification, these services would therefore share the same set of characteristics.\nSkipped properties: id,href',
          required: ['name'],
          properties: {
            deploymentRecord: {
              type: 'object',
            },
            description: {
              type: 'string',
              description: 'Description of the specification',
            },
            inheritedModel: {
              type: 'object',
            },
            isBundle: {
              type: 'boolean',
              description:
                'isBundle determines whether specification represents a single specification (false), or a bundle of specifications (true).',
            },
            lastUpdate: {
              type: 'string',
              format: 'date-time',
              description:
                'Date and time of the last update of the specification',
            },
            lifecycleStatus: {
              type: 'string',
              description:
                'Used to indicate the current lifecycle status of this catalog item',
            },
            modelContractVersionHistory: {
              type: 'object',
            },
            modelDataSheet: {
              type: 'object',
            },
            modelEvaluationData: {
              type: 'object',
            },
            modelSpecificationHistory: {
              type: 'object',
            },
            modelTrainingData: {
              type: 'object',
            },
            name: {
              type: 'string',
              description: 'Name given to the specification',
            },
            version: {
              type: 'string',
              description: 'specification version',
            },
            attachment: {
              type: 'array',
              items: {
                $ref: '#/definitions/AttachmentRefOrValue',
              },
              description:
                'Attachments that may be of relevance to this specification, such as picture, document, media',
            },
            constraint: {
              type: 'array',
              items: {
                $ref: '#/definitions/ConstraintRef',
              },
              description:
                'This is a list of constraint references applied to this specification',
            },
            entitySpecRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/EntitySpecificationRelationship',
              },
              description: 'Relationship to another specification',
            },
            featureSpecification: {
              type: 'array',
              items: {
                $ref: '#/definitions/FeatureSpecification',
              },
              description: 'A list of Features for this specification.',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
              description:
                'Parties who manage or otherwise have an interest in this specification',
            },
            resourceSpecification: {
              type: 'array',
              items: {
                $ref: '#/definitions/ResourceSpecificationRef',
              },
              description:
                'A list of resource specification references (ResourceSpecificationRef [*]). The ResourceSpecification is required for a service specification with type ResourceFacingServiceSpecification (RFSS).',
            },
            serviceLevelSpecification: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceLevelSpecificationRef',
              },
              description:
                'A list of service level specifications related to this service specification, and which will need to be satisifiable for corresponding service instances; e.g. Gold, Platinum',
            },
            serviceSpecRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceSpecRelationship',
              },
              description:
                'A list of service specifications related to this specification, e.g. migration, substitution, dependency or exclusivity relationship',
            },
            specCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/CharacteristicSpecification',
              },
              description: 'List of characteristics that the entity can take',
            },
            targetEntitySchema: {
              $ref: '#/definitions/TargetEntitySchema',
              description: 'Pointer to a schema that defines the target entity',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description: 'The period for which this REST resource is valid',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        AiModelSpecification_Update: {
          type: 'object',
          description:
            'AiModelSpecification is a class that offers characteristics to describe a type of service.\nFunctionally, it acts as a template by which Services may be instantiated. By sharing the same  specification, these services would therefore share the same set of characteristics.\nSkipped properties: id,href,lastUpdate',
          properties: {
            deploymentRecord: {
              type: 'object',
            },
            description: {
              type: 'string',
              description: 'Description of the specification',
            },
            inheritedModel: {
              type: 'object',
            },
            isBundle: {
              type: 'boolean',
              description:
                'isBundle determines whether specification represents a single specification (false), or a bundle of specifications (true).',
            },
            lifecycleStatus: {
              type: 'string',
              description:
                'Used to indicate the current lifecycle status of this catalog item',
            },
            modelContractVersionHistory: {
              type: 'object',
            },
            modelDataSheet: {
              type: 'object',
            },
            modelEvaluationData: {
              type: 'object',
            },
            modelSpecificationHistory: {
              type: 'object',
            },
            modelTrainingData: {
              type: 'object',
            },
            name: {
              type: 'string',
              description: 'Name given to the specification',
            },
            version: {
              type: 'string',
              description: 'specification version',
            },
            attachment: {
              type: 'array',
              items: {
                $ref: '#/definitions/AttachmentRefOrValue',
              },
              description:
                'Attachments that may be of relevance to this specification, such as picture, document, media',
            },
            constraint: {
              type: 'array',
              items: {
                $ref: '#/definitions/ConstraintRef',
              },
              description:
                'This is a list of constraint references applied to this specification',
            },
            entitySpecRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/EntitySpecificationRelationship',
              },
              description: 'Relationship to another specification',
            },
            featureSpecification: {
              type: 'array',
              items: {
                $ref: '#/definitions/FeatureSpecification',
              },
              description: 'A list of Features for this specification.',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
              description:
                'Parties who manage or otherwise have an interest in this specification',
            },
            resourceSpecification: {
              type: 'array',
              items: {
                $ref: '#/definitions/ResourceSpecificationRef',
              },
              description:
                'A list of resource specification references (ResourceSpecificationRef [*]). The ResourceSpecification is required for a service specification with type ResourceFacingServiceSpecification (RFSS).',
            },
            serviceLevelSpecification: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceLevelSpecificationRef',
              },
              description:
                'A list of service level specifications related to this service specification, and which will need to be satisifiable for corresponding service instances; e.g. Gold, Platinum',
            },
            serviceSpecRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceSpecRelationship',
              },
              description:
                'A list of service specifications related to this specification, e.g. migration, substitution, dependency or exclusivity relationship',
            },
            specCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/CharacteristicSpecification',
              },
              description: 'List of characteristics that the entity can take',
            },
            targetEntitySchema: {
              $ref: '#/definitions/TargetEntitySchema',
              description: 'Pointer to a schema that defines the target entity',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description: 'The period for which this REST resource is valid',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Alarm: {
          type: 'object',
          description:
            'This resource represents an alarm supporting the information model defined in ITU-T X.733.',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            ackState: {
              type: 'string',
              description:
                'Provides the Acknowledgement State of the alarm (unacknowledged | acknowledged).',
            },
            ackSystemId: {
              type: 'string',
              description:
                'Provides the name of the system that last changed the ackState of an alarm, i.e. acknowledged or unacknowledged the alarm.',
            },
            ackUserId: {
              type: 'string',
              description:
                'Provides the id of the user who has last changed the ack state of the alarm, i.e. acknowledged or unacknowledged the alarm.',
            },
            alarmChangedTime: {
              type: 'string',
              format: 'date-time',
              description:
                'Indicates the last date and time when the alarm is changed on the alarm-owning system. Any change to the alarm whether coming from the alarmed resource, or triggered by a change from the client is changing this time.',
            },
            alarmClearedTime: {
              type: 'string',
              format: 'date-time',
              description:
                'Indicates the time (as a date + time) at which the alarm is cleared at the source. ',
            },
            alarmDetails: {
              type: 'string',
              description: 'Contains further information on the alarm.',
            },
            alarmEscalation: {
              type: 'boolean',
              description:
                'Indicates if this alarm has been escalated or not. ',
            },
            alarmRaisedTime: {
              type: 'string',
              format: 'date-time',
              description:
                'Indicates the time (as a date + time) at which the alarm occurred at its source.',
            },
            alarmReportingTime: {
              type: 'string',
              format: 'date-time',
              description:
                'Indicates the time (as a date + time) at which the alarm was reported by the owning OSS. It might be different from the alarmRaisedTime. For instance, if the alarm list is maintained by an EMS, the alarmRaisedtime would be the time the alarm\n  was detected by the NE, while the alarmReportingTime would be the time this alarm was stored in the alarm list of the EMS.',
            },
            alarmedObjectType: {
              type: 'string',
              description:
                'The type (class) of the managed object associated with the event.',
            },
            clearSystemId: {
              type: 'string',
              description:
                'Provides the id of the system where the user who invoked the alarmCleared operation is located. ',
            },
            clearUserId: {
              type: 'string',
              description:
                'Provides the id of the user who invoked the alarmCleared operation',
            },
            externalAlarmId: {
              type: 'string',
              description: 'An identifier of the alarm in the source system.',
            },
            isRootCause: {
              type: 'boolean',
              description:
                'Indicates whether the alarm is a root cause alarm.. ',
            },
            plannedOutageIndicator: {
              type: 'string',
              description:
                'Indicates that the Managed Object (related to this alarm) is in planned outage (in planned maintenance, or out-of-service). ',
            },
            probableCause: {
              type: 'string',
              description:
                'Provides the probable cause of the alarm. The values are consistent with ITU-T Recommendation X.733 or 3GPP TS 32.111-2 Annex B.',
            },
            proposedRepairedActions: {
              type: 'string',
              description:
                'Indicates proposed repair actions, if known to the system emitting the alarm.',
            },
            reportingSystemId: {
              type: 'string',
              description: 'Reporting system identity.',
            },
            serviceAffecting: {
              type: 'boolean',
              description:
                'Indicates whether the alarm affects service or not.',
            },
            sourceSystemId: {
              type: 'string',
              description: 'Source system identity.',
            },
            specificProblem: {
              type: 'string',
              description:
                'Provides more specific information about the alarm.',
            },
            state: {
              type: 'string',
              description:
                'Defines the alarm state during its life cycle (raised | updated | cleared).',
            },
            affectedService: {
              type: 'array',
              items: {
                $ref: '#/definitions/AffectedService',
              },
            },
            alarmType: {
              $ref: '#/definitions/AlarmType',
            },
            alarmedObject: {
              $ref: '#/definitions/AlarmedObject',
            },
            comment: {
              type: 'array',
              items: {
                $ref: '#/definitions/Comment',
              },
            },
            correlatedAlarm: {
              type: 'array',
              items: {
                $ref: '#/definitions/AlarmRef',
              },
            },
            crossedThresholdInformation: {
              $ref: '#/definitions/CrossedThresholdInformation',
            },
            parentAlarm: {
              type: 'array',
              items: {
                $ref: '#/definitions/AlarmRef',
              },
            },
            perceivedSeverity: {
              $ref: '#/definitions/PerceivedSeverity',
            },
            place: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedPlaceRefOrValue',
              },
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Alarm_Create: {
          type: 'object',
          description:
            'This resource represents an alarm supporting the information model defined in ITU-T X.733.\nSkipped properties: id,href',
          required: [
            'alarmType',
            'perceivedSeverity',
            'probableCause',
            'alarmedObject',
            'sourceSystemId',
            'state',
            'alarmRaisedTime',
          ],
          properties: {
            ackState: {
              type: 'string',
              description:
                'Provides the Acknowledgement State of the alarm (unacknowledged | acknowledged).',
            },
            ackSystemId: {
              type: 'string',
              description:
                'Provides the name of the system that last changed the ackState of an alarm, i.e. acknowledged or unacknowledged the alarm.',
            },
            ackUserId: {
              type: 'string',
              description:
                'Provides the id of the user who has last changed the ack state of the alarm, i.e. acknowledged or unacknowledged the alarm.',
            },
            alarmChangedTime: {
              type: 'string',
              format: 'date-time',
              description:
                'Indicates the last date and time when the alarm is changed on the alarm-owning system. Any change to the alarm whether coming from the alarmed resource, or triggered by a change from the client is changing this time.',
            },
            alarmClearedTime: {
              type: 'string',
              format: 'date-time',
              description:
                'Indicates the time (as a date + time) at which the alarm is cleared at the source. ',
            },
            alarmDetails: {
              type: 'string',
              description: 'Contains further information on the alarm.',
            },
            alarmEscalation: {
              type: 'boolean',
              description:
                'Indicates if this alarm has been escalated or not. ',
            },
            alarmRaisedTime: {
              type: 'string',
              format: 'date-time',
              description:
                'Indicates the time (as a date + time) at which the alarm occurred at its source.',
            },
            alarmReportingTime: {
              type: 'string',
              format: 'date-time',
              description:
                'Indicates the time (as a date + time) at which the alarm was reported by the owning OSS. It might be different from the alarmRaisedTime. For instance, if the alarm list is maintained by an EMS, the alarmRaisedtime would be the time the alarm\n  was detected by the NE, while the alarmReportingTime would be the time this alarm was stored in the alarm list of the EMS.',
            },
            alarmedObjectType: {
              type: 'string',
              description:
                'The type (class) of the managed object associated with the event.',
            },
            clearSystemId: {
              type: 'string',
              description:
                'Provides the id of the system where the user who invoked the alarmCleared operation is located. ',
            },
            clearUserId: {
              type: 'string',
              description:
                'Provides the id of the user who invoked the alarmCleared operation',
            },
            externalAlarmId: {
              type: 'string',
              description: 'An identifier of the alarm in the source system.',
            },
            isRootCause: {
              type: 'boolean',
              description:
                'Indicates whether the alarm is a root cause alarm.. ',
            },
            plannedOutageIndicator: {
              type: 'string',
              description:
                'Indicates that the Managed Object (related to this alarm) is in planned outage (in planned maintenance, or out-of-service). ',
            },
            probableCause: {
              type: 'string',
              description:
                'Provides the probable cause of the alarm. The values are consistent with ITU-T Recommendation X.733 or 3GPP TS 32.111-2 Annex B.',
            },
            proposedRepairedActions: {
              type: 'string',
              description:
                'Indicates proposed repair actions, if known to the system emitting the alarm.',
            },
            reportingSystemId: {
              type: 'string',
              description: 'Reporting system identity.',
            },
            serviceAffecting: {
              type: 'boolean',
              description:
                'Indicates whether the alarm affects service or not.',
            },
            sourceSystemId: {
              type: 'string',
              description: 'Source system identity.',
            },
            specificProblem: {
              type: 'string',
              description:
                'Provides more specific information about the alarm.',
            },
            state: {
              type: 'string',
              description:
                'Defines the alarm state during its life cycle (raised | updated | cleared).',
            },
            affectedService: {
              type: 'array',
              items: {
                $ref: '#/definitions/AffectedService',
              },
            },
            alarmType: {
              $ref: '#/definitions/AlarmType',
            },
            alarmedObject: {
              $ref: '#/definitions/AlarmedObject',
            },
            comment: {
              type: 'array',
              items: {
                $ref: '#/definitions/Comment',
              },
            },
            correlatedAlarm: {
              type: 'array',
              items: {
                $ref: '#/definitions/AlarmRef',
              },
            },
            crossedThresholdInformation: {
              $ref: '#/definitions/CrossedThresholdInformation',
            },
            parentAlarm: {
              type: 'array',
              items: {
                $ref: '#/definitions/AlarmRef',
              },
            },
            perceivedSeverity: {
              $ref: '#/definitions/PerceivedSeverity',
            },
            place: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedPlaceRefOrValue',
              },
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Alarm_Update: {
          type: 'object',
          description:
            'This resource represents an alarm supporting the information model defined in ITU-T X.733.\nSkipped properties: id,href,alarmRaisedTime,sourceSystemId',
          properties: {
            ackState: {
              type: 'string',
              description:
                'Provides the Acknowledgement State of the alarm (unacknowledged | acknowledged).',
            },
            ackSystemId: {
              type: 'string',
              description:
                'Provides the name of the system that last changed the ackState of an alarm, i.e. acknowledged or unacknowledged the alarm.',
            },
            ackUserId: {
              type: 'string',
              description:
                'Provides the id of the user who has last changed the ack state of the alarm, i.e. acknowledged or unacknowledged the alarm.',
            },
            alarmChangedTime: {
              type: 'string',
              format: 'date-time',
              description:
                'Indicates the last date and time when the alarm is changed on the alarm-owning system. Any change to the alarm whether coming from the alarmed resource, or triggered by a change from the client is changing this time.',
            },
            alarmClearedTime: {
              type: 'string',
              format: 'date-time',
              description:
                'Indicates the time (as a date + time) at which the alarm is cleared at the source. ',
            },
            alarmDetails: {
              type: 'string',
              description: 'Contains further information on the alarm.',
            },
            alarmEscalation: {
              type: 'boolean',
              description:
                'Indicates if this alarm has been escalated or not. ',
            },
            alarmReportingTime: {
              type: 'string',
              format: 'date-time',
              description:
                'Indicates the time (as a date + time) at which the alarm was reported by the owning OSS. It might be different from the alarmRaisedTime. For instance, if the alarm list is maintained by an EMS, the alarmRaisedtime would be the time the alarm\n  was detected by the NE, while the alarmReportingTime would be the time this alarm was stored in the alarm list of the EMS.',
            },
            alarmedObjectType: {
              type: 'string',
              description:
                'The type (class) of the managed object associated with the event.',
            },
            clearSystemId: {
              type: 'string',
              description:
                'Provides the id of the system where the user who invoked the alarmCleared operation is located. ',
            },
            clearUserId: {
              type: 'string',
              description:
                'Provides the id of the user who invoked the alarmCleared operation',
            },
            externalAlarmId: {
              type: 'string',
              description: 'An identifier of the alarm in the source system.',
            },
            isRootCause: {
              type: 'boolean',
              description:
                'Indicates whether the alarm is a root cause alarm.. ',
            },
            plannedOutageIndicator: {
              type: 'string',
              description:
                'Indicates that the Managed Object (related to this alarm) is in planned outage (in planned maintenance, or out-of-service). ',
            },
            probableCause: {
              type: 'string',
              description:
                'Provides the probable cause of the alarm. The values are consistent with ITU-T Recommendation X.733 or 3GPP TS 32.111-2 Annex B.',
            },
            proposedRepairedActions: {
              type: 'string',
              description:
                'Indicates proposed repair actions, if known to the system emitting the alarm.',
            },
            reportingSystemId: {
              type: 'string',
              description: 'Reporting system identity.',
            },
            serviceAffecting: {
              type: 'boolean',
              description:
                'Indicates whether the alarm affects service or not.',
            },
            specificProblem: {
              type: 'string',
              description:
                'Provides more specific information about the alarm.',
            },
            state: {
              type: 'string',
              description:
                'Defines the alarm state during its life cycle (raised | updated | cleared).',
            },
            affectedService: {
              type: 'array',
              items: {
                $ref: '#/definitions/AffectedService',
              },
            },
            alarmType: {
              $ref: '#/definitions/AlarmType',
            },
            alarmedObject: {
              $ref: '#/definitions/AlarmedObject',
            },
            comment: {
              type: 'array',
              items: {
                $ref: '#/definitions/Comment',
              },
            },
            correlatedAlarm: {
              type: 'array',
              items: {
                $ref: '#/definitions/AlarmRef',
              },
            },
            crossedThresholdInformation: {
              $ref: '#/definitions/CrossedThresholdInformation',
            },
            parentAlarm: {
              type: 'array',
              items: {
                $ref: '#/definitions/AlarmRef',
              },
            },
            perceivedSeverity: {
              $ref: '#/definitions/PerceivedSeverity',
            },
            place: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedPlaceRefOrValue',
              },
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        AlarmRef: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
          required: ['id'],
        },
        AlarmType: {
          type: 'string',
          description:
            'Categorizes the alarm (X.733 8.1.1, 3GPP TS 32.111-2 Annex A)',
          enum: [
            'communicationsAlarm',
            'processingErrorAlarm',
            'environmentalAlarm',
            'qualityOfServiceAlarm',
            'equipmentAlarm',
            'integrityViolation',
            'operationalViolation',
            'physicalViolation',
            'securityService',
            'mechanismViolation',
            'timeDomainViolation',
          ],
        },
        AlarmedObject: {
          type: 'object',
          description:
            'Identifies the managed object instance associated with the alarm.',
          properties: {
            id: {
              type: 'string',
              description:
                'The identifier of the managed object associated with the event.',
            },
            href: {
              type: 'string',
              description:
                'A reference to the managed object associated with the event.',
            },
          },
        },
        AlgorithmParams: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            value: {
              type: 'string',
            },
          },
        },
        AlgorithmThresholdRule: {
          type: 'object',
          description: 'A threshold rule that is a reference to an algorithm',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            algorithmRef: {
              type: 'string',
            },
            name: {
              type: 'string',
              description: 'The name of the rule.',
            },
            perfAlarmSpecThresholdCrossingDescription: {
              type: 'string',
              description:
                'A specific description of the threshold crossing (intended to be populated e under the alarm under CrossedThreshold structure).',
            },
            thresholdRuleCondition: {
              type: 'string',
              description:
                'A concrete threshold may have two possible values: \\"Raise\\" - a threshold was crossed or \\"Clear\\" - a threshold ceased crossing',
            },
            thresholdRuleName: {
              type: 'string',
              description:
                'A word, term, or phrase by which a Performance threshold rule is known and distinguished from other threshold rules',
            },
            thresholdRuleSeverity: {
              type: 'string',
              description:
                'A threshold can be generated in different severity levels. A crossing for each level may require a different condition and possibly trigger a different consequence. The supported severity levels are equivalent to the possible severity level of alarms.',
            },
            algorithmParams: {
              type: 'array',
              items: {
                $ref: '#/definitions/AlgorithmParams',
              },
            },
            consequence: {
              type: 'array',
              items: {
                $ref: '#/definitions/Consequence',
              },
              description:
                'A threshold crossing or a threshold ceased to be crossing results in a Performance consequence.',
            },
            measurement: {
              $ref: '#/definitions/Measurement',
            },
            performanceAlarmSpecification: {
              $ref: '#/definitions/PerformanceAlarmSpecification',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Any: {},
        AssociationSpecificationRef: {
          type: 'object',
          description: 'reference to an AssociationSpecification object',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
          required: ['id'],
        },
        Attachment: {
          type: 'object',
          description:
            'Complements the description of an element (for instance a product) through video, pictures...',
          properties: {
            id: {
              example: '4aafacbd-11ff-4dc8-b445-305f2215715f',
              type: 'string',
              description: 'Unique identifier for this particular attachment',
            },
            href: {
              example:
                'http://host/Attachment/4aafacbd-11ff-4dc8-b445-305f2215715f',
              type: 'string',
              format: 'uri',
              description: 'URI for this Attachment',
            },
            attachmentType: {
              example: 'video',
              type: 'string',
              description: 'Attachment type such as video, picture',
            },
            content: {
              type: 'string',
              format: 'base64',
              description:
                'The actual contents of the attachment object, if embedded, encoded as base64',
            },
            description: {
              example: 'Photograph of the Product',
              type: 'string',
              description:
                'A narrative text describing the content of the attachment',
            },
            mimeType: {
              type: 'string',
              description:
                'Attachment mime type such as extension file for video, picture and document',
            },
            name: {
              type: 'string',
              description: 'The name of the attachment',
            },
            url: {
              example:
                'http://host/Content/4aafacbd-11ff-4dc8-b445-305f2215715f',
              type: 'string',
              format: 'uri',
              description:
                'Uniform Resource Locator, is a web page address (a subset of URI)',
            },
            size: {
              $ref: '#/definitions/Quantity',
              description: 'The size of the attachment.',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description:
                'The period of time for which the attachment is valid',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        AttachmentRef: {
          type: 'object',
          description:
            'Attachment reference. An attachment complements the description of an element (for instance a product) through video, pictures',
          properties: {
            id: {
              type: 'string',
              description: 'Unique-Identifier for this attachment',
            },
            href: {
              type: 'string',
              format: 'uri',
              description:
                'URL serving as reference for the attachment resource',
            },
            description: {
              type: 'string',
              description:
                'A narrative text describing the content of the attachment',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            url: {
              type: 'string',
              format: 'uri',
              description: 'Link to the attachment media/content',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
          required: ['id'],
        },
        AttachmentRefOrValue: {
          type: 'object',
          description:
            'An attachment by value or by reference. An attachment complements the description of an element, for example through a document, a video, a picture.',
          properties: {
            id: {
              example: '4aafacbd-11ff-4dc8-b445-305f2215715f',
              type: 'string',
              description: 'Unique identifier for this particular attachment',
            },
            href: {
              example:
                'http://host/Attachment/4aafacbd-11ff-4dc8-b445-305f2215715f',
              type: 'string',
              format: 'uri',
              description: 'URI for this Attachment',
            },
            attachmentType: {
              example: 'video',
              type: 'string',
              description: 'Attachment type such as video, picture',
            },
            content: {
              type: 'string',
              format: 'base64',
              description:
                'The actual contents of the attachment object, if embedded, encoded as base64',
            },
            description: {
              example: 'Photograph of the Product',
              type: 'string',
              description:
                'A narrative text describing the content of the attachment',
            },
            mimeType: {
              type: 'string',
              description:
                'Attachment mime type such as extension file for video, picture and document',
            },
            name: {
              type: 'string',
              description: 'The name of the attachment',
            },
            url: {
              example:
                'http://host/Content/4aafacbd-11ff-4dc8-b445-305f2215715f',
              type: 'string',
              format: 'uri',
              description:
                'Uniform Resource Locator, is a web page address (a subset of URI)',
            },
            size: {
              $ref: '#/definitions/Quantity',
              description: 'The size of the attachment.',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description:
                'The period of time for which the attachment is valid',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
        },
        Characteristic: {
          type: 'object',
          description:
            'Describes a given characteristic of an object or entity through a name/value pair.',
          required: ['name', 'value'],
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier of the characteristic',
            },
            name: {
              type: 'string',
              description: 'Name of the characteristic',
            },
            valueType: {
              type: 'string',
              description: 'Data type of the value of the characteristic',
            },
            characteristicRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/CharacteristicRelationship',
              },
            },
            value: {
              $ref: '#/definitions/Any',
              description: 'The value of the characteristic',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        CharacteristicRelationship: {
          type: 'object',
          description:
            'Another Characteristic that is related to the current Characteristic;',
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier of the characteristic',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            relationshipType: {
              type: 'string',
              description: 'The type of relationship',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        CharacteristicSpecification: {
          type: 'object',
          description: 'This class defines a characteristic specification.',
          properties: {
            id: {
              type: 'string',
              description: 'Unique ID for the characteristic',
            },
            configurable: {
              type: 'boolean',
              description:
                'If true, the Boolean indicates that the target Characteristic is configurable',
            },
            description: {
              type: 'string',
              description:
                'A narrative that explains the CharacteristicSpecification.',
            },
            extensible: {
              type: 'boolean',
              description:
                'An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for a resource.',
            },
            isUnique: {
              type: 'boolean',
              description:
                'An indicator that specifies if a value is unique for the specification. Possible values are; "unique while value is in effect" and "unique whether value is in effect or not"',
            },
            maxCardinality: {
              type: 'integer',
              description:
                'The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality.',
            },
            minCardinality: {
              type: 'integer',
              description:
                'The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality.',
            },
            name: {
              type: 'string',
              description:
                'A word, term, or phrase by which this characteristic specification is known and distinguished from other characteristic specifications.',
            },
            regex: {
              type: 'string',
              description:
                'A rule or principle represented in regular expression used to derive the value of a characteristic value.',
            },
            valueType: {
              type: 'string',
              description:
                'A kind of value that the characteristic can take on, such as numeric, text and so forth',
            },
            charSpecRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/CharacteristicSpecificationRelationship',
              },
              description:
                'An aggregation, migration, substitution, dependency or exclusivity relationship between/among Specification Characteristics.',
            },
            characteristicValueSpecification: {
              type: 'array',
              items: {
                $ref: '#/definitions/CharacteristicValueSpecification',
              },
              description:
                'A CharacteristicValueSpecification object is used to define a set of attributes, each of which can be assigned to a corresponding set of attributes in a CharacteristicSpecification object. The values of the attributes in the CharacteristicValueSpecification object describe the values of the attributes that a corresponding Characteristic object can take on.',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description:
                'The period of time for which a characteristic is applicable.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@valueSchemaLocation': {
              type: 'string',
              description:
                'This (optional) field provides a link to the schema describing the value type.',
            },
          },
        },
        CharacteristicSpecificationBase: {
          type: 'object',
          description: 'This class defines a characteristic specification.',
          properties: {
            id: {
              type: 'string',
              description: 'Unique ID for the characteristic',
            },
            configurable: {
              type: 'boolean',
              description:
                'If true, the Boolean indicates that the target Characteristic is configurable',
            },
            description: {
              type: 'string',
              description:
                'A narrative that explains the CharacteristicSpecification.',
            },
            extensible: {
              type: 'boolean',
              description:
                'An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for a resource.',
            },
            isUnique: {
              type: 'boolean',
              description:
                'An indicator that specifies if a value is unique for the specification. Possible values are; "unique while value is in effect" and "unique whether value is in effect or not"',
            },
            maxCardinality: {
              type: 'integer',
              description:
                'The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality.',
            },
            minCardinality: {
              type: 'integer',
              description:
                'The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality.',
            },
            name: {
              type: 'string',
              description:
                'A word, term, or phrase by which this characteristic specification is known and distinguished from other characteristic specifications.',
            },
            regex: {
              type: 'string',
              description:
                'A rule or principle represented in regular expression used to derive the value of a characteristic value.',
            },
            valueType: {
              type: 'string',
              description:
                'A kind of value that the characteristic can take on, such as numeric, text and so forth',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description:
                'The period of time for which a characteristic is applicable.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@valueSchemaLocation': {
              type: 'string',
              description:
                'This (optional) field provides a link to the schema describing the value type.',
            },
          },
        },
        CharacteristicSpecificationRelationship: {
          type: 'object',
          description:
            'An aggregation, migration, substitution, dependency or exclusivity relationship between/among Characteristic specifications. The specification characteristic is embedded within the specification whose ID and href are in this entity, and identified by its ID.',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            characteristicSpecificationId: {
              type: 'string',
              description:
                'Unique identifier of the characteristic within the specification',
            },
            name: {
              type: 'string',
              description:
                'Name of the target characteristic within the specification',
            },
            parentSpecificationHref: {
              type: 'string',
              format: 'uri',
              description:
                'Hyperlink reference to the parent specification containing the target characteristic',
            },
            parentSpecificationId: {
              type: 'string',
              description:
                'Unique identifier of the parent specification containing the target characteristic',
            },
            relationshipType: {
              type: 'string',
              description:
                'Type of relationship such as aggregation, migration, substitution, dependency, exclusivity',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description: 'The period for which the object is valid',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        CharacteristicValueSpecification: {
          type: 'object',
          description:
            'specification of a value (number or text or an object) that can be assigned to a Characteristic.',
          properties: {
            isDefault: {
              type: 'boolean',
              description:
                'If true, the Boolean Indicates if the value is the default value for a characteristic',
            },
            rangeInterval: {
              type: 'string',
              description:
                'An indicator that specifies the inclusion or exclusion of the valueFrom and valueTo attributes. If applicable, possible values are "open", "closed", "closedBottom" and "closedTop".',
            },
            regex: {
              type: 'string',
              description: 'A regular expression constraint for given value',
            },
            unitOfMeasure: {
              type: 'string',
              description:
                'A length, surface, volume, dry measure, liquid measure, money, weight, time, and the like. In general, a determinate quantity or magnitude of the kind designated, taken as a standard of comparison for others of the same kind, in assigning to them numerical values, as 1 foot, 1 yard, 1 mile, 1 square foot.',
            },
            valueFrom: {
              type: 'integer',
              description:
                'The low range value that a characteristic can take on',
            },
            valueTo: {
              type: 'integer',
              description:
                'The upper range value that a characteristic can take on',
            },
            valueType: {
              type: 'string',
              description:
                'A kind of value that the characteristic value can take on, such as numeric, text and so forth',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description:
                'The period of time for which a value is applicable.',
            },
            value: {
              $ref: '#/definitions/Any',
              description:
                'A discrete value that the characteristic can take on, or the actual value of the characteristic',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Comment: {
          type: 'object',
          description: 'Indicates the comments entered on the alarm.',
          properties: {
            comment: {
              type: 'string',
              description: 'Indicates the text of the comment.',
            },
            systemId: {
              type: 'string',
              description:
                'Indicates the system identifier on which the client set the comment.',
            },
            time: {
              type: 'string',
              format: 'date-time',
              description: 'Indicates the time commenting the alarm',
            },
            userId: {
              type: 'string',
              description: 'Indicates the user commenting the alarm.',
            },
          },
        },
        Consequence: {
          type: 'object',
          description:
            'A threshold crossing or a threshold ceased to be crossing results in a Performance consequence.',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            description: {
              type: 'string',
              description: 'A description of a Consequence',
            },
            name: {
              type: 'string',
              description:
                'A word, term, or phrase by which a Consequence is known and distinguished from other measurements',
            },
            prescribedAction: {
              type: 'string',
              description: 'The suggested action',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        ConstraintRef: {
          type: 'object',
          description:
            'Constraint reference. The Constraint resource represents a policy/rule applied to an entity or entity spec.',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            version: {
              type: 'string',
              description: 'constraint version',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
          required: ['id'],
        },
        CrossedThresholdInformation: {
          type: 'object',
          description:
            'Identifies the details of the threshold that has been crossed.',
          properties: {
            direction: {
              type: 'string',
              description:
                'Indicates the threshold crossing direction: up or down.',
            },
            granularity: {
              type: 'string',
              description:
                'Indicates the granularity at which the indicator is evaluated for threshold crossing',
            },
            indicatorName: {
              type: 'string',
              description:
                'Indicates the name of indicator which crossed the threshold.',
            },
            indicatorUnit: {
              type: 'string',
              description:
                'Indicates the unit of the measurement of the indicator corresponding to the threshold that has been crossed.',
            },
            observedValue: {
              type: 'string',
              description:
                'Indicates the value of the indicator which crossed the threshold.',
            },
            thresholdCrossingDescription: {
              type: 'string',
              description:
                'Indicates further information on the threshold crossing alarm.',
            },
            threshold: {
              $ref: '#/definitions/ThresholdRef',
            },
          },
        },
        Entity: {
          type: 'object',
          description: 'Base entity schema for use in TMForum Open-APIs',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        EntityRef: {
          type: 'object',
          description:
            'Entity reference schema to be use for all entityRef class.',
          required: ['id'],
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
        },
        EntitySpecification: {
          type: 'object',
          description:
            'EntitySpecification is a class that offers characteristics to describe a type of entity. Entities are generic constructs that may be used to describe bespoke business entities that are not effectively covered by the existing SID model.\nFunctionally, the entity specification acts as a template by which entities may be instantiated and described. By sharing the same specification, these entities would therefore share the same set of characteristics.\nNote: The \u2018configurable\u2019 attribute on the specCharacteristics determines if an entity instantiated from the entity specification can override the value of the attribute. When set to false, the entity instance may not define a value that differs from the value in the specification.',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            description: {
              type: 'string',
              description: 'Description of the specification',
            },
            isBundle: {
              type: 'boolean',
              description:
                'isBundle determines whether specification represents a single specification (false), or a bundle of specifications (true).',
            },
            lastUpdate: {
              type: 'string',
              format: 'date-time',
              description:
                'Date and time of the last update of the specification',
            },
            lifecycleStatus: {
              type: 'string',
              description:
                'Used to indicate the current lifecycle status of this catalog item',
            },
            name: {
              type: 'string',
              description: 'Name given to the specification',
            },
            version: {
              type: 'string',
              description: 'specification version',
            },
            attachment: {
              type: 'array',
              items: {
                $ref: '#/definitions/AttachmentRefOrValue',
              },
              description:
                'Attachments that may be of relevance to this specification, such as picture, document, media',
            },
            constraint: {
              type: 'array',
              items: {
                $ref: '#/definitions/ConstraintRef',
              },
              description:
                'This is a list of constraint references applied to this specification',
            },
            entitySpecRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/EntitySpecificationRelationship',
              },
              description: 'Relationship to another specification',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
              description:
                'Parties who manage or otherwise have an interest in this specification',
            },
            specCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/CharacteristicSpecification',
              },
              description: 'List of characteristics that the entity can take',
            },
            targetEntitySchema: {
              $ref: '#/definitions/TargetEntitySchema',
              description: 'Pointer to a schema that defines the target entity',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description: 'The period for which this REST resource is valid',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        EntitySpecificationRelationship: {
          type: 'object',
          description:
            'A migration, substitution, dependency or exclusivity relationship between/among entity specifications.',
          required: ['relationshipType'],
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            relationshipType: {
              type: 'string',
              description:
                'Type of relationship such as migration, substitution, dependency, exclusivity',
            },
            role: {
              type: 'string',
              description: 'The association role for this entity specification',
            },
            associationSpec: {
              $ref: '#/definitions/AssociationSpecificationRef',
              description:
                'A specification for an association used by this relationship',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description:
                'The period for which the entitySpecRelationship is valid',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
        },
        EntityValue: {
          type: 'object',
          description: 'Base entity value  schema for use in TMForum Open-APIs',
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier of a related entity.',
            },
            href: {
              type: 'string',
              description: 'Reference of the related entity.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Event: {
          type: 'object',
          description: 'event with common attributes.',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOccurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occurred.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            analyticCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/Characteristic',
              },
            },
            event: {
              $ref: '#/definitions/Any',
              description: 'The event linked to the involved resource object',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
            },
            reportingSystem: {
              $ref: '#/definitions/EntityRef',
              description: 'Reporting System described by EntityRef',
            },
            source: {
              $ref: '#/definitions/EntityRef',
              description: 'Source Entity described by EntityRef',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Event_Create: {
          type: 'object',
          description:
            'event with common attributes.\nSkipped properties: id,href',
          properties: {
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOccurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occurred.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            analyticCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/Characteristic',
              },
            },
            event: {
              $ref: '#/definitions/Any',
              description: 'The event linked to the involved resource object',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
            },
            reportingSystem: {
              $ref: '#/definitions/EntityRef',
              description: 'Reporting System described by EntityRef',
            },
            source: {
              $ref: '#/definitions/EntityRef',
              description: 'Source Entity described by EntityRef',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Extensible: {
          type: 'object',
          description: 'Base Extensible schema for use in TMForum Open-APIs',
          properties: {
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Feature: {
          type: 'object',
          description: 'Configuration feature.',
          required: ['featureCharacteristic', 'name'],
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier of the feature.',
            },
            isBundle: {
              type: 'boolean',
              description: 'True if this is a feature group. Default is false.',
            },
            isEnabled: {
              type: 'boolean',
              description: 'True if this feature is enabled. Default is true.',
            },
            name: {
              type: 'string',
              description: 'This is the name for the feature.',
            },
            constraint: {
              type: 'array',
              items: {
                $ref: '#/definitions/ConstraintRef',
              },
              description: 'This is a list of feature constraints.',
            },
            featureCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/Characteristic',
              },
              minItems: 1,
              description:
                'This is a list of Characteristics for a particular feature.',
            },
            featureRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/FeatureRelationship',
              },
            },
          },
        },
        FeatureRelationship: {
          type: 'object',
          description: 'Configuration feature',
          required: ['name', 'relationshipType'],
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier of the target feature.',
            },
            name: {
              type: 'string',
              description: 'This is the name of the target feature.',
            },
            relationshipType: {
              type: 'string',
              description: 'This is the type of the feature relationship.',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description:
                'The period for which this feature relationship is valid.',
            },
          },
        },
        FeatureSpecification: {
          type: 'object',
          description:
            'Specification for resource, service or product features',
          properties: {
            id: {
              type: 'string',
              description:
                'Identifier of the feature specification. Must be locally unique within the containing specification, thus allowing direct access to the feature spec.',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            isBundle: {
              type: 'boolean',
              description:
                'A flag indicating if this is a feature group (true) or not (false)',
            },
            isEnabled: {
              type: 'boolean',
              description:
                'A flag indicating if the feature is enabled (true) or not (false)',
            },
            name: {
              type: 'string',
              description: 'Unique name given to the feature specification',
            },
            version: {
              type: 'string',
              description: 'Version of the feature specification',
            },
            constraint: {
              type: 'array',
              items: {
                $ref: '#/definitions/ConstraintRef',
              },
              description: 'This is a list of feature constraints',
            },
            featureSpecCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/FeatureSpecificationCharacteristic',
              },
              description:
                'This is a list of characteristics for a particular feature',
            },
            featureSpecRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/FeatureSpecificationRelationship',
              },
              description:
                'A dependency, exclusivity or aggratation relationship between/among feature specifications.',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description:
                'The period for which this feature specification is valid',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        FeatureSpecificationCharacteristic: {
          type: 'object',
          description: 'Configuration feature characteristic specification.',
          required: ['name'],
          properties: {
            id: {
              type: 'string',
              description: 'Unique ID for the characteristic',
            },
            configurable: {
              type: 'boolean',
              description:
                'If true, the Boolean indicates that the target Characteristic is configurable',
            },
            description: {
              type: 'string',
              description:
                'A narrative that explains the CharacteristicSpecification.',
            },
            extensible: {
              type: 'boolean',
              description:
                'An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for a resource.',
            },
            isUnique: {
              type: 'boolean',
              description:
                'An indicator that specifies if a value is unique for the specification. Possible values are; "unique while value is in effect" and "unique whether value is in effect or not"',
            },
            maxCardinality: {
              type: 'integer',
              description:
                'The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality.',
            },
            minCardinality: {
              type: 'integer',
              description:
                'The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality.',
            },
            name: {
              type: 'string',
              description:
                'A word, term, or phrase by which this characteristic specification is known and distinguished from other characteristic specifications.',
            },
            regex: {
              type: 'string',
              description:
                'A rule or principle represented in regular expression used to derive the value of a characteristic value.',
            },
            valueType: {
              type: 'string',
              description:
                'A kind of value that the characteristic can take on, such as numeric, text and so forth',
            },
            featureSpecCharRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/FeatureSpecificationCharacteristicRelationship',
              },
              description:
                'An aggregation, migration, substitution, dependency or exclusivity relationship between/among feature characteristics.',
            },
            featureSpecCharacteristicValue: {
              type: 'array',
              items: {
                $ref: '#/definitions/CharacteristicValueSpecification',
              },
              description:
                'Used to define a set of attributes, each of which can be assigned to a corresponding set of attributes in a FeatureCharacteristic object.',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description:
                'The period of time for which a characteristic is applicable.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@valueSchemaLocation': {
              type: 'string',
              description:
                'This (optional) field provides a link to the schema describing the value type.',
            },
          },
        },
        FeatureSpecificationCharacteristicRelationship: {
          type: 'object',
          description:
            'An aggregation, migration, substitution, dependency or exclusivity relationship between/among FeatureSpecificationCharacteristics.',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            characteristicId: {
              type: 'string',
              description:
                'Unique identifier of the characteristic within the the target feature specification',
            },
            featureId: {
              type: 'string',
              description:
                'Unique identifier of the target feature specification within the resource specification.',
            },
            name: {
              type: 'string',
              description: 'Name of the target characteristic',
            },
            relationshipType: {
              type: 'string',
              description:
                'Type of relationship such as aggregation, migration, substitution, dependency, exclusivity',
            },
            resourceSpecificationHref: {
              type: 'string',
              format: 'uri',
              description:
                'Hyperlink reference to the resource specification containing the target feature and feature characteristic',
            },
            resourceSpecificationId: {
              type: 'string',
              description:
                'Unique identifier of the resource specification containing the target feature and feature characteristic',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description: 'The period for which the object is valid',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        FeatureSpecificationRelationship: {
          type: 'object',
          description: 'Relationship between feature specifications',
          required: ['name', 'relationshipType'],
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            featureId: {
              type: 'string',
              description:
                'Unique identifier of the target feature specification.',
            },
            name: {
              type: 'string',
              description:
                'This is the name of the target feature specification.',
            },
            parentSpecificationHref: {
              type: 'string',
              format: 'uri',
              description:
                'Hyperlink reference to the parent specification containing the target feature',
            },
            parentSpecificationId: {
              type: 'string',
              description:
                'Unique identifier of the parent specification containing the target feature',
            },
            relationshipType: {
              type: 'string',
              description:
                'This is the type of the feature specification relationship.',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description:
                'The period for which this feature spoecification relationship is valid.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        HeaderItem: {
          type: 'object',
          description: 'An item typically included in a request or response',
          required: ['name', 'value'],
          properties: {
            name: {
              type: 'string',
              description: 'The name of the header item, e.g. locale',
            },
            value: {
              type: 'string',
              description: 'The value of the header item, e.g. en-us',
            },
          },
        },
        Hub: {
          type: 'object',
          description: 'A Hub is used to subscribe to an event notification',
          required: ['id', 'callback'],
          properties: {
            id: {
              example: '4aafacbd-11ff-4dc8-b445-305f2215715f',
              type: 'string',
              description:
                'The unique-id for your subscription - referenced when updating or deleting a subscription',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            callback: {
              example: 'http://host/resource/id/listener',
              type: 'string',
              format: 'uri',
              description:
                'The URI that will be POSTed to when a notification is triggered',
            },
            query: {
              example: 'status=active',
              type: 'string',
              description:
                'This is a query string used to filter notifications in the context of the notifier',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Hub_Create: {
          type: 'object',
          description:
            'A Hub is used to subscribe to an event notification\nSkipped properties: id,href',
          required: ['callback'],
          properties: {
            callback: {
              example: 'http://host/resource/id/listener',
              type: 'string',
              format: 'uri',
              description:
                'The URI that will be POSTed to when a notification is triggered',
            },
            query: {
              example: 'status=active',
              type: 'string',
              description:
                'This is a query string used to filter notifications in the context of the notifier',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Measurement: {
          type: 'object',
          description: 'A counter/KPI to be used by the threshold rule',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            collectionType: {
              type: 'string',
              description:
                'This attribute indicates different forms in which the measurement data can be captured (please see details below)',
            },
            description: {
              type: 'string',
              description: 'A description of the measurement',
            },
            measurementFormula: {
              type: 'string',
              description:
                'A formula that is used to calculate a measurement (a string)',
            },
            measurementType: {
              type: 'string',
              description:
                'A category of the measurement (different SDOs may be using different categories)',
            },
            measurementUnit: {
              type: 'string',
              description:
                'The unit of the measurement (e.g. second, bytes, Celsius, etc.)',
            },
            name: {
              type: 'string',
              description:
                'A word, term, or phrase by which a measurement is known and distinguished from other measurements',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Monitor: {
          type: 'object',
          description: 'Monitoring of resources',
          properties: {
            id: {
              type: 'string',
              description:
                'Identifier of an instance of the monitor. Required to be unique within the resource type.  Used in URIs as the identifier for specific instances of a type',
            },
            href: {
              type: 'string',
              description: 'reference to this monitor',
            },
            sourceHref: {
              type: 'string',
              description: 'The monitored resource href',
            },
            state: {
              type: 'string',
              description:
                'The Monitor state of the resource.  InProgress, InError, Completed',
            },
            request: {
              $ref: '#/definitions/Request',
              description: 'Represents the request',
            },
            response: {
              $ref: '#/definitions/Response',
              description: 'Represents the response',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Note: {
          type: 'object',
          description: 'Extra information about a given entity',
          properties: {
            id: {
              type: 'string',
              description:
                'Identifier of the note within its containing entity (may or may not be globally unique, depending on provider implementation)',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            author: {
              type: 'string',
              description: 'Author of the note',
            },
            date: {
              type: 'string',
              format: 'date-time',
              description: 'Date of the note',
            },
            text: {
              type: 'string',
              description: 'Text of the note',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        OrderItemActionType: {
          type: 'string',
          description: 'action to be performed on the product',
          enum: ['add', 'modify', 'delete', 'noChange'],
        },
        PerceivedSeverity: {
          type: 'string',
          description:
            'This datatype lists the possible severities that can be allocated to a Alarm. The values are consistent with ITU-T Recommendation X.733. This specification does not recommend the use of indeterminate.',
          enum: [
            'CRITICAL',
            'MAJOR',
            'MINOR',
            'WARNING',
            'INDETERMINATE',
            'CLEARED',
          ],
        },
        PerformanceAlarmSpecification: {
          type: 'object',
          description:
            'The specification of how to populate the alarm fields when generating a threshold crossing alarm.',
          properties: {
            perfAlarmSpecAdditionalText: {
              type: 'string',
            },
            perfAlarmSpecAlarmType: {
              type: 'string',
            },
            perfAlarmSpecProbableCause: {
              type: 'string',
            },
            perfAlarmSpecSpecificProblem: {
              type: 'string',
            },
            perfAlarmThresholdCrossingDescription: {
              type: 'string',
            },
            perfAlarmSpecSeverity: {
              $ref: '#/definitions/PerceivedSeverity',
            },
            performanceConsequence: {
              $ref: '#/definitions/PerformanceConsequence',
            },
          },
        },
        PerformanceConsequence: {
          type: 'object',
          description:
            'A Consequence can be applied as a result of a threshold crossing or a threshold ceasing to be crossed',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            description: {
              type: 'string',
              description: 'A description of a Consequence',
            },
            name: {
              type: 'string',
              description:
                'A word, term, or phrase by which a Consequence is known and distinguished from other measurements',
            },
            prescribedAction: {
              type: 'string',
              description: 'The suggested action',
            },
            alarmSpecification: {
              $ref: '#/definitions/PerformanceAlarmSpecification',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Place: {
          type: 'object',
          description:
            'Place reference. Place defines the places where the products are sold or delivered.',
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier of the place',
            },
            href: {
              type: 'string',
              description: 'Unique reference of the place',
            },
            name: {
              type: 'string',
              description:
                'A user-friendly name for the place, such as [Paris Store], [London Store], [Main Home]',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        PlaceRef: {
          type: 'object',
          description:
            'Place reference. PlaceRef defines the placeRefs where the products are sold or delivered.',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
          required: ['id'],
        },
        Quantity: {
          type: 'object',
          description: 'An amount in a given unit',
          properties: {
            amount: {
              default: 1,
              type: 'number',
              format: 'float',
              description: 'Numeric value in a given unit',
            },
            units: {
              type: 'string',
              description: 'Unit',
            },
          },
        },
        RelatedEntityRefOrValue: {
          type: 'object',
          description:
            'A reference to an entity, where the type of the entity is not known in advance. A related entity defines a entity described by reference or by value linked to a specific entity. The polymorphic attributes @type, @schemaLocation & @referredType are related to the Entity and not the RelatedEntityRefOrValue class itself',
          required: ['role'],
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier of a related entity.',
            },
            href: {
              type: 'string',
              description: 'Reference of the related entity.',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            role: {
              type: 'string',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
        },
        RelatedParty: {
          type: 'object',
          description:
            'Related Entity reference. A related party defines party or party role linked to a specific entity.',
          required: ['@referredType', 'id'],
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            role: {
              type: 'string',
              description: 'Role played by the related party',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
        },
        RelatedPlaceRefOrValue: {
          type: 'object',
          description:
            'Related Entity reference. A related place defines a place described by reference or by value linked to a specific entity. The polymorphic attributes @type, @schemaLocation & @referredType are related to the place entity and not the RelatedPlaceRefOrValue class itself',
          required: ['role'],
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier of the place',
            },
            href: {
              type: 'string',
              description: 'Unique reference of the place',
            },
            name: {
              type: 'string',
              description:
                'A user-friendly name for the place, such as [Paris Store], [London Store], [Main Home]',
            },
            role: {
              type: 'string',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
        },
        RelatedServiceOrderItem: {
          type: 'object',
          description:
            'RelatedServiceOrderItem (a ServiceOrder item) .The service order item which triggered service creation/change/termination.',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            itemId: {
              type: 'string',
              description:
                'Identifier of the order item where the service was managed',
            },
            role: {
              type: 'string',
              description: 'role of the service order item for this service',
            },
            serviceOrderHref: {
              type: 'string',
              description: 'Reference of the related entity.',
            },
            serviceOrderId: {
              type: 'string',
              description: 'Unique identifier of a related entity.',
            },
            itemAction: {
              $ref: '#/definitions/OrderItemActionType',
              description: 'Action of the order item for this service',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
        },
        Request: {
          type: 'object',
          description: 'A response to a request',
          required: ['body', 'header'],
          properties: {
            body: {
              type: 'string',
              description:
                'The body of the request. For example for an HTTP request might contain content of a form .',
            },
            method: {
              type: 'string',
              description: 'The protocol of the request, e.g. http',
            },
            to: {
              type: 'string',
              description:
                'The target of the request, e.g. a URL for an HTTP request',
            },
            header: {
              type: 'array',
              items: {
                $ref: '#/definitions/HeaderItem',
              },
              minItems: 1,
              description:
                'Items included in the header of the request. For example for an HTTP request might contain requested locale, basic authentication.',
            },
          },
        },
        ResourceRef: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
          required: ['id'],
        },
        ResourceSpecificationRef: {
          type: 'object',
          description:
            "Resources are physical or non-physical components (or some combination of these) within an enterprise's infrastructure or inventory. They are typically consumed or used by services (for example a physical port assigned to a service) or contribute to the realization of a Product (for example, a SIM card). They can be drawn from the Application, Computing and Network domains, and include, for example, Network Elements, software, IT systems, content and information, and technology components.\nA ResourceSpecification is an abstract base class for representing a generic means for implementing a particular type of Resource. In essence, a ResourceSpecification defines the common attributes and relationships of a set of related Resources, while Resource defines a specific instance that is based on a particular ResourceSpecification.",
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            version: {
              type: 'string',
              description: 'Resource Specification version',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
          required: ['id'],
        },
        Response: {
          type: 'object',
          description: 'A response to a request',
          required: ['body', 'header'],
          properties: {
            body: {
              type: 'string',
              description:
                'The body of the response. For example for an HTTP response might contain HTML for rendering.',
            },
            statusCode: {
              type: 'string',
              description:
                'The status of the response. For example for an HTTP response would be codes such as 200, 400, etc.',
            },
            header: {
              type: 'array',
              items: {
                $ref: '#/definitions/HeaderItem',
              },
              minItems: 1,
              description:
                'Items included in the header of the response. For example for an HTTP response might contain negotiated locale.',
            },
          },
        },
        Rule: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'The name of the rule.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Rule_Create: {
          type: 'object',
          description: '\nSkipped properties: id,href',
          required: ['name', '@type'],
          properties: {
            name: {
              type: 'string',
              description: 'The name of the rule.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Rule_Update: {
          type: 'object',
          description: '\nSkipped properties: id,href',
          properties: {
            name: {
              type: 'string',
              description: 'The name of the rule.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        RuleRef: {
          type: 'object',
          description:
            'Rule reference. Rule is a common pattern or Template for the SLA parameters, metrics, and thresholds',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
          required: ['id'],
        },
        SLA: {
          type: 'object',
          description:
            'Part of a business agreement between a Service Provider and a Customer, quantitatively specifying the service performance level the Service Provider commits to deliver.',
          properties: {
            id: {
              type: 'string',
              description:
                'Unique identifier of the Service Level Agreement (SLA)',
            },
            href: {
              type: 'string',
              description: 'Reference of the Service Level Agreement (SLA)',
            },
            approvalDate: {
              type: 'string',
              format: 'date-time',
            },
            approved: {
              type: 'boolean',
            },
            description: {
              type: 'string',
              description: 'Description of the Service Level Agreement (SLA)',
            },
            name: {
              type: 'string',
              description: 'Name of the Service Level Agreement (SLA)',
            },
            state: {
              type: 'string',
              description: 'State of the Service Level Agreement (SLA)',
            },
            version: {
              type: 'string',
              description: 'Version of the Service Level Agreement (SLA)',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
            },
            rule: {
              type: 'array',
              items: {
                $ref: '#/definitions/Rule',
              },
            },
            template: {
              $ref: '#/definitions/TemplateRef',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description: 'Period where the clauses of the SLA are applicable',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Service: {
          type: 'object',
          description:
            'Service is a base class for defining the Service hierarchy. All Services are characterized as either being possibly visible and usable by a Customer or not. This gives rise to the two subclasses of Service: CustomerFacingService and ResourceFacingService.',
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier of the service',
            },
            href: {
              type: 'string',
              description: 'Reference of the service',
            },
            category: {
              type: 'string',
              description: 'Is it a customer facing or resource facing service',
            },
            description: {
              type: 'string',
              description: 'Free-text description of the service',
            },
            endDate: {
              type: 'string',
              format: 'date-time',
              description: 'Date when the service ends',
            },
            hasStarted: {
              type: 'boolean',
              description: 'If TRUE, this Service has already been started',
            },
            isBundle: {
              type: 'boolean',
              description:
                "If true, the service is a ServiceBundle which regroup a service hierachy. If false, the service is a 'atomic' service (hierachy leaf).",
            },
            isServiceEnabled: {
              type: 'boolean',
              description:
                'If FALSE and hasStarted is FALSE, this particular Service has NOT been enabled for use - if FALSE and hasStarted is TRUE then the service has failed ',
            },
            isStateful: {
              type: 'boolean',
              description:
                'If TRUE, this Service can be changed without affecting any other services',
            },
            name: {
              type: 'string',
              description: 'Name of the service',
            },
            serviceDate: {
              type: 'string',
              description:
                'Date when the service was created (whatever its status).',
            },
            serviceType: {
              type: 'string',
              description: 'Business type of the service',
            },
            startDate: {
              type: 'string',
              format: 'date-time',
              description: 'Date when the service starts',
            },
            startMode: {
              type: 'string',
              description:
                'This attribute is an enumerated integer that indicates how the Service is started, such as: 0: Unknown; 1: Automatically by the managed environment; 2: Automatically by the owning device; 3: Manually by the Provider of the Service; 4: Manually by a Customer of the Provider; 5: Any of the above',
            },
            feature: {
              type: 'array',
              items: {
                $ref: '#/definitions/Feature',
              },
              description: 'A list of feature associated with this service ',
            },
            note: {
              type: 'array',
              items: {
                $ref: '#/definitions/Note',
              },
              description: 'A list of notes made on this service',
            },
            place: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedPlaceRefOrValue',
              },
              description:
                'A list of places (Place [*]). Used to define a place useful for the service (for example a geographical place whre the service is installed)',
            },
            relatedEntity: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedEntityRefOrValue',
              },
              description:
                'A list of related  entity in relationship with this service ',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
              description:
                'A list of related party references (RelatedParty [*]). A related party defines party or party role linked to a specific entity',
            },
            serviceCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/Characteristic',
              },
              description:
                'A list of characteristics that characterize this service (ServiceCharacteristic [*]) ',
            },
            serviceOrderItem: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedServiceOrderItem',
              },
              description:
                'A list of service order items related to this service',
            },
            serviceRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceRelationship',
              },
              description:
                'A list of service relationships (ServiceRelationship [*]). Describes links with other service(s) in the inventory.',
            },
            serviceSpecification: {
              $ref: '#/definitions/ServiceSpecificationRef',
              description:
                'The specification from which this service was instantiated',
            },
            state: {
              $ref: '#/definitions/ServiceStateType',
              description:
                'The life cycle state of the service, such as designed, reserved, active, etc...',
            },
            supportingResource: {
              type: 'array',
              items: {
                $ref: '#/definitions/ResourceRef',
              },
              description:
                'A list of supporting resources (SupportingResource [*]).Note: only Service of type RFS can be associated with Resources',
            },
            supportingService: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceRefOrValue',
              },
              description:
                'A list of supporting services (SupportingService [*]). A collection of services that support this service (bundling, link CFS to RFS)',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        ServiceLevelSpecificationRef: {
          type: 'object',
          description:
            'A Service Level Specification represents a pre-defined or negotiated set of Service Level \nObjectives. In addition, certain consequences are associated with not meeting the Service Level \nObjectives. Service Level Agreements are expressed in terms of Service Level Specifications.',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
          required: ['id'],
        },
        ServiceRef: {
          type: 'object',
          description:
            'Service reference, for when Service is used by other entities',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
          required: ['id'],
        },
        ServiceRefOrValue: {
          type: 'object',
          description:
            'A Service to be created defined by value or existing defined by reference. The polymorphic attributes @type, @schemaLocation & @referredType are related to the Service entity and not the RelatedServiceRefOrValue class itself',
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier of the service',
            },
            href: {
              type: 'string',
              description: 'Reference of the service',
            },
            category: {
              type: 'string',
              description: 'Is it a customer facing or resource facing service',
            },
            description: {
              type: 'string',
              description: 'Free-text description of the service',
            },
            endDate: {
              type: 'string',
              format: 'date-time',
              description: 'Date when the service ends',
            },
            hasStarted: {
              type: 'boolean',
              description: 'If TRUE, this Service has already been started',
            },
            isBundle: {
              type: 'boolean',
              description:
                "If true, the service is a ServiceBundle which regroup a service hierachy. If false, the service is a 'atomic' service (hierachy leaf).",
            },
            isServiceEnabled: {
              type: 'boolean',
              description:
                'If FALSE and hasStarted is FALSE, this particular Service has NOT been enabled for use - if FALSE and hasStarted is TRUE then the service has failed ',
            },
            isStateful: {
              type: 'boolean',
              description:
                'If TRUE, this Service can be changed without affecting any other services',
            },
            name: {
              type: 'string',
              description: 'Name of the service',
            },
            serviceDate: {
              type: 'string',
              description:
                'Date when the service was created (whatever its status).',
            },
            serviceType: {
              type: 'string',
              description: 'Business type of the service',
            },
            startDate: {
              type: 'string',
              format: 'date-time',
              description: 'Date when the service starts',
            },
            startMode: {
              type: 'string',
              description:
                'This attribute is an enumerated integer that indicates how the Service is started, such as: 0: Unknown; 1: Automatically by the managed environment; 2: Automatically by the owning device; 3: Manually by the Provider of the Service; 4: Manually by a Customer of the Provider; 5: Any of the above',
            },
            feature: {
              type: 'array',
              items: {
                $ref: '#/definitions/Feature',
              },
              description: 'A list of feature associated with this service ',
            },
            note: {
              type: 'array',
              items: {
                $ref: '#/definitions/Note',
              },
              description: 'A list of notes made on this service',
            },
            place: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedPlaceRefOrValue',
              },
              description:
                'A list of places (Place [*]). Used to define a place useful for the service (for example a geographical place whre the service is installed)',
            },
            relatedEntity: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedEntityRefOrValue',
              },
              description:
                'A list of related  entity in relationship with this service ',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
              description:
                'A list of related party references (RelatedParty [*]). A related party defines party or party role linked to a specific entity',
            },
            serviceCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/Characteristic',
              },
              description:
                'A list of characteristics that characterize this service (ServiceCharacteristic [*]) ',
            },
            serviceOrderItem: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedServiceOrderItem',
              },
              description:
                'A list of service order items related to this service',
            },
            serviceRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceRelationship',
              },
              description:
                'A list of service relationships (ServiceRelationship [*]). Describes links with other service(s) in the inventory.',
            },
            serviceSpecification: {
              $ref: '#/definitions/ServiceSpecificationRef',
              description:
                'The specification from which this service was instantiated',
            },
            state: {
              $ref: '#/definitions/ServiceStateType',
              description:
                'The life cycle state of the service, such as designed, reserved, active, etc...',
            },
            supportingResource: {
              type: 'array',
              items: {
                $ref: '#/definitions/ResourceRef',
              },
              description:
                'A list of supporting resources (SupportingResource [*]).Note: only Service of type RFS can be associated with Resources',
            },
            supportingService: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceRefOrValue',
              },
              description:
                'A list of supporting services (SupportingService [*]). A collection of services that support this service (bundling, link CFS to RFS)',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
        },
        ServiceRelationship: {
          type: 'object',
          required: ['relationshipType'],
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            relationshipType: {
              type: 'string',
            },
            service: {
              $ref: '#/definitions/ServiceRefOrValue',
            },
            serviceRelationshipCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/Characteristic',
              },
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        ServiceSpecRelationship: {
          type: 'object',
          description:
            'A dependency, substitution or exclusivity relationship between/among service specifications.',
          required: ['relationshipType'],
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            relationshipType: {
              type: 'string',
              description:
                'Type of relationship such as dependency, substitution or exclusivity',
            },
            role: {
              type: 'string',
              description:
                'The association role for this service specification',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description:
                'The period for which the serviceSpecRelationship is valid',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
        },
        ServiceSpecification: {
          type: 'object',
          description:
            'ServiceSpecification is a class that offers characteristics to describe a type of service.\nFunctionally, it acts as a template by which Services may be instantiated. By sharing the same specification, these services would therefore share the same set of characteristics.',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            description: {
              type: 'string',
              description: 'Description of the specification',
            },
            isBundle: {
              type: 'boolean',
              description:
                'isBundle determines whether specification represents a single specification (false), or a bundle of specifications (true).',
            },
            lastUpdate: {
              type: 'string',
              format: 'date-time',
              description:
                'Date and time of the last update of the specification',
            },
            lifecycleStatus: {
              type: 'string',
              description:
                'Used to indicate the current lifecycle status of this catalog item',
            },
            name: {
              type: 'string',
              description: 'Name given to the specification',
            },
            version: {
              type: 'string',
              description: 'specification version',
            },
            attachment: {
              type: 'array',
              items: {
                $ref: '#/definitions/AttachmentRefOrValue',
              },
              description:
                'Attachments that may be of relevance to this specification, such as picture, document, media',
            },
            constraint: {
              type: 'array',
              items: {
                $ref: '#/definitions/ConstraintRef',
              },
              description:
                'This is a list of constraint references applied to this specification',
            },
            entitySpecRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/EntitySpecificationRelationship',
              },
              description: 'Relationship to another specification',
            },
            featureSpecification: {
              type: 'array',
              items: {
                $ref: '#/definitions/FeatureSpecification',
              },
              description: 'A list of Features for this specification.',
            },
            relatedParty: {
              type: 'array',
              items: {
                $ref: '#/definitions/RelatedParty',
              },
              description:
                'Parties who manage or otherwise have an interest in this specification',
            },
            resourceSpecification: {
              type: 'array',
              items: {
                $ref: '#/definitions/ResourceSpecificationRef',
              },
              description:
                'A list of resource specification references (ResourceSpecificationRef [*]). The ResourceSpecification is required for a service specification with type ResourceFacingServiceSpecification (RFSS).',
            },
            serviceLevelSpecification: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceLevelSpecificationRef',
              },
              description:
                'A list of service level specifications related to this service specification, and which will need to be satisifiable for corresponding service instances; e.g. Gold, Platinum',
            },
            serviceSpecRelationship: {
              type: 'array',
              items: {
                $ref: '#/definitions/ServiceSpecRelationship',
              },
              description:
                'A list of service specifications related to this specification, e.g. migration, substitution, dependency or exclusivity relationship',
            },
            specCharacteristic: {
              type: 'array',
              items: {
                $ref: '#/definitions/CharacteristicSpecification',
              },
              description: 'List of characteristics that the entity can take',
            },
            targetEntitySchema: {
              $ref: '#/definitions/TargetEntitySchema',
              description: 'Pointer to a schema that defines the target entity',
            },
            validFor: {
              $ref: '#/definitions/TimePeriod',
              description: 'The period for which this REST resource is valid',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        ServiceSpecificationRef: {
          type: 'object',
          description:
            'Service specification reference: ServiceSpecification(s) required to realize a ProductSpecification.',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            version: {
              type: 'string',
              description: 'Service specification version',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
          required: ['id'],
        },
        ServiceStateType: {
          type: 'string',
          description: 'Valid values for the lifecycle state of the service',
          enum: [
            'feasibilityChecked',
            'designed',
            'reserved',
            'inactive',
            'active',
            'terminated',
          ],
        },
        SimpleThresholdRule: {
          type: 'object',
          description:
            'A threshold rule that is based on explicit definition of attributes that represent a Boolean expression',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            conformanceComparatorLower: {
              type: 'integer',
              description:
                'An operator that when applied on a value (of conformanceTargetLower) specifies whether a Performance threshold rule is crossed or ceased to be crossed.',
            },
            conformanceComparatorUpper: {
              type: 'string',
              description:
                'An operator that when applied on a value (of conformanceTargetUpper) specifies whether a Performance threshold rule is crossed or ceased to be crossed.',
            },
            conformanceTargetLower: {
              type: 'integer',
              description:
                'A value used to determine if the Performance threshold is crossed or ceased to be crossed, serving as an lower value',
            },
            conformanceTargetUpper: {
              type: 'integer',
              description:
                'A value used to determine if the Performance threshold is crossed or ceased to be crossed, serving as an upper value',
            },
            gracePeriods: {
              type: 'integer',
              description:
                'The number of times an objective can remain un-updated in reference to the conformancePeriod without a Performance threshold Consequence being initiated',
            },
            name: {
              type: 'string',
              description: 'The name of the rule.',
            },
            perfAlarmSpecThresholdCrossingDescription: {
              type: 'string',
              description:
                'A specific description of the threshold crossing (intended to be populated e under the alarm under CrossedThreshold structure).',
            },
            thresholdRuleCondition: {
              type: 'string',
              description:
                'A concrete threshold may have two possible values: \\"Raise\\" - a threshold was crossed or \\"Clear\\" - a threshold ceased crossing',
            },
            thresholdRuleName: {
              type: 'string',
              description:
                'A word, term, or phrase by which a Performance threshold rule is known and distinguished from other threshold rules',
            },
            thresholdRuleSeverity: {
              type: 'string',
              description:
                'A threshold can be generated in different severity levels. A crossing for each level may require a different condition and possibly trigger a different consequence. The supported severity levels are equivalent to the possible severity level of alarms.',
            },
            thresholdTarget: {
              type: 'integer',
              description:
                'A percent that is used to specify when a warning should be used that indicates a Performance threshold is in danger of not being met.',
            },
            conformancePeriod: {
              $ref: '#/definitions/TimePeriod',
            },
            consequence: {
              type: 'array',
              items: {
                $ref: '#/definitions/Consequence',
              },
              description:
                'A threshold crossing or a threshold ceased to be crossing results in a Performance consequence.',
            },
            measurement: {
              $ref: '#/definitions/Measurement',
            },
            performanceAlarmSpecification: {
              $ref: '#/definitions/PerformanceAlarmSpecification',
            },
            tolerancePeriod: {
              $ref: '#/definitions/TimePeriod',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        SoftwareRef: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            softwareVersion: {
              type: 'string',
              description: 'software version',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
          required: ['id'],
        },
        TargetEntitySchema: {
          type: 'object',
          description:
            'The reference object to the schema and type of target entity which is described by a specification',
          required: ['@schemaLocation', '@type'],
          properties: {
            '@schemaLocation': {
              type: 'string',
              description:
                'This field provides a link to the schema describing the target entity',
            },
            '@type': {
              type: 'string',
              description: 'Class type of the target entity',
            },
          },
        },
        TemplateRef: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            href: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
          required: ['id'],
        },
        ThresholdRef: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'Name of the related entity.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
            '@referredType': {
              type: 'string',
              description:
                'The actual type of the target instance when needed for disambiguation.',
            },
          },
          required: ['id'],
        },
        ThresholdRule: {
          type: 'object',
          description:
            'ThresholdRule A base entity for concrete definition of thresholds.This datatype  is  abstract',
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            name: {
              type: 'string',
              description: 'The name of the rule.',
            },
            perfAlarmSpecThresholdCrossingDescription: {
              type: 'string',
              description:
                'A specific description of the threshold crossing (intended to be populated e under the alarm under CrossedThreshold structure).',
            },
            thresholdRuleCondition: {
              type: 'string',
              description:
                'A concrete threshold may have two possible values: \\"Raise\\" - a threshold was crossed or \\"Clear\\" - a threshold ceased crossing',
            },
            thresholdRuleName: {
              type: 'string',
              description:
                'A word, term, or phrase by which a Performance threshold rule is known and distinguished from other threshold rules',
            },
            thresholdRuleSeverity: {
              type: 'string',
              description:
                'A threshold can be generated in different severity levels. A crossing for each level may require a different condition and possibly trigger a different consequence. The supported severity levels are equivalent to the possible severity level of alarms.',
            },
            consequence: {
              type: 'array',
              items: {
                $ref: '#/definitions/Consequence',
              },
              description:
                'A threshold crossing or a threshold ceased to be crossing results in a Performance consequence.',
            },
            measurement: {
              $ref: '#/definitions/Measurement',
            },
            performanceAlarmSpecification: {
              $ref: '#/definitions/PerformanceAlarmSpecification',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        TimePeriod: {
          type: 'object',
          description:
            'A period of time, either as a deadline (endDateTime only) a startDateTime only, or both',
          properties: {
            endDateTime: {
              example: '1985-04-12T23:20:50.52Z',
              type: 'string',
              format: 'date-time',
              description: 'End of the time period, using IETC-RFC-3339 format',
            },
            startDateTime: {
              example: '1985-04-12T23:20:50.52Z',
              type: 'string',
              format: 'date-time',
              description:
                'Start of the time period, using IETC-RFC-3339 format',
            },
          },
        },
        Topic: {
          type: 'object',
          description: 'Is a event channel provided by the Event Streaming API',
          properties: {
            id: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            href: {
              type: 'string',
              description: 'Reference of the related entity.',
            },
            contentQuery: {
              type: 'string',
              description:
                'is the filter that will be applied on the content of the Event.',
            },
            headerQuery: {
              type: 'string',
              description:
                'is the filter that will be applied on the Event header properties.',
            },
            name: {
              type: 'string',
              description:
                'use to identify grouping of events, per domain, per event types, per access control-right and so on.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Topic_Create: {
          type: 'object',
          description:
            'Is a event channel provided by the Event Streaming API\nSkipped properties: id,href',
          properties: {
            contentQuery: {
              type: 'string',
              description:
                'is the filter that will be applied on the content of the Event.',
            },
            headerQuery: {
              type: 'string',
              description:
                'is the filter that will be applied on the Event header properties.',
            },
            name: {
              type: 'string',
              description:
                'use to identify grouping of events, per domain, per event types, per access control-right and so on.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        Violation: {
          type: 'object',
          required: [
            'actualValue',
            'consequence',
            'operator',
            'referenceValue',
          ],
          properties: {
            id: {
              type: 'string',
              description: 'unique identifier',
            },
            href: {
              type: 'string',
              format: 'uri',
              description: 'Hyperlink reference',
            },
            actualValue: {
              type: 'string',
            },
            comment: {
              type: 'string',
            },
            consequence: {
              type: 'string',
            },
            operator: {
              type: 'string',
            },
            referenceValue: {
              type: 'string',
            },
            tolerance: {
              type: 'string',
            },
            unit: {
              type: 'string',
            },
            violationAverage: {
              type: 'string',
            },
            attachment: {
              $ref: '#/definitions/AttachmentRef',
            },
            rule: {
              $ref: '#/definitions/RuleRef',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class Extensible name',
            },
          },
        },
        EventSubscription: {
          type: 'object',
          description:
            'Sets the communication endpoint address the service instance must use to deliver notification information',
          required: ['id', 'callback'],
          properties: {
            id: {
              type: 'string',
              description: 'Id of the listener',
            },
            callback: {
              type: 'string',
              description: 'The callback being registered.',
            },
            query: {
              type: 'string',
              description: 'additional data to be passed',
            },
          },
        },
        EventSubscriptionInput: {
          type: 'object',
          description:
            'Sets the communication endpoint address the service instance must use to deliver notification information',
          required: ['callback'],
          properties: {
            callback: {
              type: 'string',
              description: 'The callback being registered.',
            },
            query: {
              type: 'string',
              description: 'additional data to be passed',
            },
          },
        },
        AiContractSpecificationCreateEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiContractSpecificationCreateEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        AiContractSpecificationCreateEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiContractSpecification: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiContractSpecification',
            },
          },
        },
        AiContractSpecificationDeleteEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiContractSpecificationDeleteEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        AiContractSpecificationDeleteEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiContractSpecification: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiContractSpecification',
            },
          },
        },
        AiContractSpecificationAttributeValueChangeEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
            fieldPath: {
              type: 'string',
              description:
                'The path identifying the object field concerned by this notification.',
            },
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiContractSpecificationAttributeValueChangeEventPayload',
            },
          },
        },
        AiContractSpecificationAttributeValueChangeEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiContractSpecification: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiContractSpecification',
            },
          },
        },
        AiModelCreateEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiModelCreateEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        AiModelCreateEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiModel: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiModel',
            },
          },
        },
        AiModelAttributeValueChangeEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
            fieldPath: {
              type: 'string',
              description:
                'The path identifying the object field concerned by this notification.',
            },
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiModelAttributeValueChangeEventPayload',
            },
          },
        },
        AiModelAttributeValueChangeEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiModel: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiModel',
            },
          },
        },
        AiModelStateChangeEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiModelStateChangeEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        AiModelStateChangeEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiModel: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiModel',
            },
          },
        },
        AiModelDeleteEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiModelDeleteEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        AiModelDeleteEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiModel: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiModel',
            },
          },
        },
        AiModelSpecificationCreateEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiModelSpecificationCreateEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        AiModelSpecificationCreateEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiModelSpecification: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiModelSpecification',
            },
          },
        },
        AiModelSpecificationDeleteEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiModelSpecificationDeleteEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        AiModelSpecificationDeleteEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiModelSpecification: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiModelSpecification',
            },
          },
        },
        AiModelSpecificationAttributeValueChangeEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
            fieldPath: {
              type: 'string',
              description:
                'The path identifying the object field concerned by this notification.',
            },
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiModelSpecificationAttributeValueChangeEventPayload',
            },
          },
        },
        AiModelSpecificationAttributeValueChangeEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiModelSpecification: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiModelSpecification',
            },
          },
        },
        AiContractCreateEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiContractCreateEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        AiContractCreateEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiContract: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiContract',
            },
          },
        },
        AiContractAttributeValueChangeEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
            fieldPath: {
              type: 'string',
              description:
                'The path identifying the object field concerned by this notification.',
            },
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiContractAttributeValueChangeEventPayload',
            },
          },
        },
        AiContractAttributeValueChangeEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiContract: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiContract',
            },
          },
        },
        AiContractStateChangeEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiContractStateChangeEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        AiContractStateChangeEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiContract: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiContract',
            },
          },
        },
        AiContractDeleteEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiContractDeleteEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        AiContractDeleteEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiContract: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiContract',
            },
          },
        },
        AiContractViolationCreateEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiContractViolationCreateEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        AiContractViolationCreateEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiContractViolation: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiContractViolation',
            },
          },
        },
        AiContractViolationAttributeValueChangeEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
            fieldPath: {
              type: 'string',
              description:
                'The path identifying the object field concerned by this notification.',
            },
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiContractViolationAttributeValueChangeEventPayload',
            },
          },
        },
        AiContractViolationAttributeValueChangeEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiContractViolation: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiContractViolation',
            },
          },
        },
        AiContractViolationDeleteEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AiContractViolationDeleteEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        AiContractViolationDeleteEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            aiContractViolation: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/AiContractViolation',
            },
          },
        },
        AlarmCreateEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AlarmCreateEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        AlarmCreateEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            alarm: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/Alarm',
            },
          },
        },
        AlarmAttributeValueChangeEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
            fieldPath: {
              type: 'string',
              description:
                'The path identifying the object field concerned by this notification.',
            },
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AlarmAttributeValueChangeEventPayload',
            },
          },
        },
        AlarmAttributeValueChangeEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            alarm: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/Alarm',
            },
          },
        },
        AlarmStateChangeEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AlarmStateChangeEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        AlarmStateChangeEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            alarm: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/Alarm',
            },
          },
        },
        AlarmDeleteEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/AlarmDeleteEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        AlarmDeleteEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            alarm: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/Alarm',
            },
          },
        },
        RuleCreateEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/RuleCreateEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        RuleCreateEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            rule: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/Rule',
            },
          },
        },
        RuleAttributeValueChangeEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
            fieldPath: {
              type: 'string',
              description:
                'The path identifying the object field concerned by this notification.',
            },
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/RuleAttributeValueChangeEventPayload',
            },
          },
        },
        RuleAttributeValueChangeEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            rule: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/Rule',
            },
          },
        },
        RuleStateChangeEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/RuleStateChangeEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        RuleStateChangeEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            rule: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/Rule',
            },
          },
        },
        RuleDeleteEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/RuleDeleteEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        RuleDeleteEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            rule: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/Rule',
            },
          },
        },
        EventCreateEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/EventCreateEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        EventCreateEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            event: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/Event',
            },
          },
        },
        MonitorCreateEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/MonitorCreateEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        MonitorCreateEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            monitor: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/Monitor',
            },
          },
        },
        MonitorAttributeValueChangeEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
            fieldPath: {
              type: 'string',
              description:
                'The path identifying the object field concerned by this notification.',
            },
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/MonitorAttributeValueChangeEventPayload',
            },
          },
        },
        MonitorAttributeValueChangeEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            monitor: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/Monitor',
            },
          },
        },
        MonitorStateChangeEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/MonitorStateChangeEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        MonitorStateChangeEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            monitor: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/Monitor',
            },
          },
        },
        MonitorDeleteEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/MonitorDeleteEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        MonitorDeleteEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            monitor: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/Monitor',
            },
          },
        },
        TopicCreateEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/TopicCreateEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        TopicCreateEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            topic: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/Topic',
            },
          },
        },
        TopicChangeEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/TopicChangeEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        TopicChangeEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            topic: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/Topic',
            },
          },
        },
        TopicDeleteEvent: {
          type: 'object',
          description: 'The notification data structure',
          properties: {
            event: {
              description:
                'The event payload linked to the involved resource object',
              $ref: '#/definitions/TopicDeleteEventPayload',
            },
            eventId: {
              type: 'string',
              description: 'The identifier of the notification.',
            },
            eventTime: {
              type: 'string',
              format: 'date-time',
              description: 'Time of the event occurrence.',
            },
            eventType: {
              type: 'string',
              description: 'The type of the notification.',
            },
            correlationId: {
              type: 'string',
              description: 'The correlation id for this event.',
            },
            domain: {
              type: 'string',
              description: 'The domain of the event.',
            },
            title: {
              type: 'string',
              description: 'The title of the event.',
            },
            description: {
              type: 'string',
              description: 'An explnatory of the event.',
            },
            priority: {
              type: 'string',
              description: 'A priority.',
            },
            timeOcurred: {
              type: 'string',
              format: 'date-time',
              description: 'The time the event occured.',
            },
          },
        },
        TopicDeleteEventPayload: {
          type: 'object',
          description: 'The event data structure',
          properties: {
            topic: {
              description: 'The involved resource data for the event',
              $ref: '#/definitions/Topic',
            },
          },
        },
        Error: {
          description:
            'Used when an API throws an Error, typically with a HTTP error response-code (3xx, 4xx, 5xx)',
          type: 'object',
          required: ['code', 'reason'],
          properties: {
            code: {
              type: 'string',
              description:
                'Application relevant detail, defined in the API or a common list.',
            },
            reason: {
              type: 'string',
              description:
                'Explanation of the reason for the error which can be shown to a client user.',
            },
            message: {
              type: 'string',
              description:
                'More details and corrective actions related to the error which can be shown to a client user.',
            },
            status: {
              type: 'string',
              description: 'HTTP Error code extension',
            },
            referenceError: {
              type: 'string',
              format: 'uri',
              description: 'URI of documentation describing the error.',
            },
            '@baseType': {
              type: 'string',
              description: 'When sub-classing, this defines the super-class.',
            },
            '@schemaLocation': {
              type: 'string',
              format: 'uri',
              description:
                'A URI to a JSON-Schema file that defines additional attributes and relationships',
            },
            '@type': {
              type: 'string',
              description:
                'When sub-classing, this defines the sub-class entity name.',
            },
          },
        },
      },
    });
    fetch('https://editor.swagger.io/api/v1/designs/create', {
      method: 'POST',
      body: JSON.stringify({
        visibility: 'private',
        name: 'My API Design',
        specFormat: 'json',
        specContent: JSON.stringify(swaggerJsonString),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        // handle the error
      });
  };

  return (
    <>
      <TableRow
        id={`${row.document_number}-${row.version_info}`}
        style={{
          border: '4px solid #FFF8F8',
          borderRadius: 5,
          margin: '10px 0',
        }}
      >
        <TableCell sx={{ verticalAlign: 'top' }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{
              borderTopLeftRadius: '10px',
              borderBottomLeftRadius: '10px',
            }}
          >
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Link
                href={{
                  pathname: `apis/${row.document_number}`,
                }}
              >
                <Typography
                  variant="h6"
                  className={gothamFont.className}
                  color="#1A2746"
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: '600',
                  }}
                >
                  {row.api_name}
                </Typography>
              </Link>
              {historic && (
                <Typography
                  variant="body1"
                  color="error"
                  sx={{ fontWeight: 'bold', fontStyle: 'italic' }}
                >
                  [Historic]
                </Typography>
              )}
            </Box>
            <Box>
              <Typography
                className={gothamFont.className}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: '400',
                }}
              >
                {removeHtmlTags(row.api_description)}
              </Typography>
            </Box>
          </Box>
        </TableCell>
        <TableCell>
          <Typography className={gothamFont.className}>
            {row.document_number}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography className={gothamFont.className}>
            {row.release_info}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography className={gothamFont.className}>
            {row.version_info}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography className={gothamFont.className}>
            {row.published_date}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography className={gothamFont.className}>
            {row.context}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ padding: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table>
                <TableBody>
                  {row.options?.map((historyRow, i) => (
                    <TableRow key={i} sx={collapseRowBgColor(i)}>
                      <TableCell>
                        <Image
                          src={`/images/options/${historyRow.type}.jpg`}
                          width={24}
                          height={24}
                          alt="logo"
                          style={{ objectFit: 'cover' }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography>
                          {transformToFullName(historyRow.type)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography className={gothamFont.className}>
                          {historyRow.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography className={gothamFont.className}>
                          {historyRow.version}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Link
                          href={historyRow.download}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="contained">Download</Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      <Button
                        variant="contained"
                        onClick={() => handleButtonClick(row.options)}
                      >
                        Swagger test
                      </Button>
                    </TableCell>
                  </TableRow>
                  {/* <TableRow>
                    <TableCell align="center" colSpan={5}>
                      <Button variant="contained">Download all</Button>
                    </TableCell>
                  </TableRow> */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Row;
