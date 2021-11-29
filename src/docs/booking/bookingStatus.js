const bookingStatus = {
    put: {
        tags: ['Bookings'],
        description: 'Update booking status',
        security: [
            { bearerAuth: [] },
        ],
        operationId: 'updateBookingStatus',
        parameters: [
            // expected params.
            {
                name: 'id', // name of the param
                in: 'path', // location of the param
                schema: {
                    $ref: '#/components/schemas/id', // data model of the param
                },
                required: true, // Mandatory param
                description: 'A single course id', // param desc.
            },
        ],
        responses: {
            200: {
                description: 'Bookings were obtained',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Bookings',
                        },
                    },
                },
            },
        },
    },
}

export default bookingStatus;