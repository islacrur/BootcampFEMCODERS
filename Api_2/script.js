const APIURL = 'https://api.github.com/users/';
const searchProfile = document.getElementById("search");
const main = document.getElementById("main");

async function getProfile() {
    try {
        const user = searchProfile.value;
        const userData = await getUserData(user);
        const userRepos = await getRepos(user);

        const cardContent = createProfileCard(userData, userRepos);
        updateMainContent(cardContent);
    } catch (error) {
        const errorCard = "ERROR: WRONG USER";
        updateMainContent(errorCard);
    }
}

async function getUserData(user) {
    const response = await axios.get(APIURL + user);
    return response.data;
}

function createProfileCard(userData, userRepos) {
    const { avatar_url, name, bio, followers, following, public_repos } = userData;

    const repoItems = userRepos.slice(0, 5).map(repo => `<div class="repo">${repo}</div>`).join('');

    return `
        <div class="card">
            <img class="avatar" src="${avatar_url}" alt="${name} avatar">
            <div class="user-info">
                <h2 class="name">${name}</h2>
                <p class="bio">${bio}</p>
                <ul>
                    <li>${followers} Followers</li>
                    <li>${following} Following</li>
                    <li>${public_repos} Repos</li>
                </ul>
                ${repoItems}
            </div>
        </div>`;
}

function updateMainContent(content) {
    main.innerHTML = content;
}

async function getRepos(user) {
    try {
        const response = await axios.get(`${APIURL}${user}/repos`);
        return response.data.map(repo => repo.name);
    } catch (error) {
        return [];
    }
}

searchProfile.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        getProfile();
    }
});