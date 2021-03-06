import {filterByString} from '../../Components/Util/Filter'
const objectsToFilter = [
    {
        id: 1,
        taskName: 'Review New Claim',
        claimSpecNo: '5500001',
        type: 'Claim', 
        assigned: 'Alex Coupe',
        priority: 'Normal',
        dueDate: '01-09-2019'
    },
    {
        id: 2,
        taskName: 'Review New Invoice',
        claimSpecNo: '5500000',
        type: 'Claim', 
        assigned: 'Alex Coupe',
        priority: 'Normal',
        dueDate: '01-09-2019'
    },
    {
        id: 3,
        taskName: 'Diary Review',
        claimSpecNo: '5500244',
        type: 'Claim', 
        assigned: 'Donald Duck',
        priority: 'Urgent',
        dueDate: '29-09-2019'
    },
    {
        id: 4,
        taskName: 'Loss Adjustor Report Received',
        claimSpecNo: '5500044',
        type: 'Claim', 
        assigned: 'Peter Parker',
        priority: 'Urgent',
        dueDate: '05-09-2019'
    },
]

test('Filters Array To Return Only Selected Property', () => {
    let filtered = filterByString(objectsToFilter, 'assigned', 'Alex Coupe');
    expect(filtered).toEqual([
        {
            id: 1,
            taskName: 'Review New Claim',
            claimSpecNo: '5500001',
            type: 'Claim', 
            assigned: 'Alex Coupe',
            priority: 'Normal',
            dueDate: '01-09-2019'
        },
        {
            id: 2,
            taskName: 'Review New Invoice',
            claimSpecNo: '5500000',
            type: 'Claim', 
            assigned: 'Alex Coupe',
            priority: 'Normal',
            dueDate: '01-09-2019'
        },
        
    ]);
});

