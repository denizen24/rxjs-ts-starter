import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

const githubInput = document.querySelector('#githubInput');
const gitlabInput = document.querySelector('#gitlabInput');

const githubData$ = fromEvent(githubInput, 'input')
    .pipe(
        map((e) => (e.target as HTMLInputElement).value),
        debounceTime(700),
        distinctUntilChanged(),
        switchMap((value) => ajax.getJSON(`https://api.github.com/search/repositories?q=${value}`))
    );

githubData$.subscribe((value) => console.log('data$ value', value));

const dataGitLab$ = fromEvent(gitlabInput, 'input')
    .pipe(
        map((e) => (e.target as HTMLInputElement).value),
        debounceTime(700),
        distinctUntilChanged(),
        switchMap((value) => ajax.getJSON(`https://gitlab.com/api/v4/projects?search=${value}`))
    );

dataGitLab$.subscribe((value) => console.log('dataGitLab$ value', value));