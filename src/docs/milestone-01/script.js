// manage team member data within the JS file, which can be especially handy if team changes role frequently

document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = [
        {
            name: 'Daniel',
            role: 'Developer',
            focus: 'Backend Development',
            imgSrc: 'images/daniel.png'
        },
        {
            name: 'Dang',
            role: 'Developer',
            focus: 'Fullstack Development - Tester',
            imgSrc: 'images/dang.png'
        },
        {
            name: 'Graeme',
            role: 'Project Manager',
            focus: 'Coordination & Planning',
            imgSrc: 'images/graeme.png'
        },
        {
            name: 'Thanh',
            role: 'Developer',
            focus: 'Frontend Development',
            imgSrc: 'images/thanh.png'
        }
    ];

    const teamContainer = document.createElement('div');
    teamContainer.className = 'team-container';

    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card';

        const img = document.createElement('img');
        img.src = member.imgSrc;
        img.alt = `${member.name}`;
        img.className = 'team-photo';

        const name = document.createElement('h3');
        name.textContent = member.name;

        const role = document.createElement('p');
        role.textContent = `Role: ${member.role}`;

        const focus = document.createElement('p');
        focus.textContent = `Focus: ${member.focus}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(role);
        card.appendChild(focus);

        teamContainer.appendChild(card);
    });

    document.querySelector('#team').appendChild(teamContainer);
});
