/*!
 * =====================================================
 *  DarkQueen JS v1.1.0
 *  App de películas y series
 * -----------------------------------------------------
 *  Repository: https://github.com/gabriidev/DarkQueen
 *  Autor: gabriidev
 *  © 2026 gabriidev
 * =====================================================
 */

export function showLoaders() {
    // Insertar Loader en Hero
    const hero = document.getElementById('heroBg');
    const heroLoader = document.createElement('div');
    heroLoader.id = 'hero-loader-el';
    heroLoader.className = 'hero-loader-container';
    heroLoader.innerHTML = '<div class="hero-loader"></div>';
    hero.appendChild(heroLoader);

    // Insertar Loader en Poster
    const posterContainer = document.querySelector('.hero-content');
    const posterLoader = document.createElement('div');
    posterLoader.id = 'poster-loader-el';
    posterLoader.className = 'poster-loader-container';
    posterLoader.innerHTML = '<div class="poster-loader"></div>';
    posterContainer.insertBefore(posterLoader, document.getElementById('moviePoster'));
    document.getElementById('moviePoster').classList.add('hidden');

    // Skeletons para textos
    document.getElementById('movieSinopsis').innerHTML = '<span class="text-skeleton synopsis-skeleton"></span>';
    document.getElementById('movieGenre').innerHTML = '<span class="text-skeleton" style="width:100px; display:inline-block"></span>';
    document.getElementById('movieYear').innerHTML = '<span class="text-skeleton" style="width:50px; display:inline-block"></span>';
}

export function hideLoaders() {
    // Quitar loaders de imagen
    const hL = document.getElementById('hero-loader-el');
    if(hL) hL.remove();

    const pL = document.getElementById('poster-loader-el');
    if(pL) pL.remove();
    
    document.getElementById('moviePoster').classList.remove('hidden');
}
