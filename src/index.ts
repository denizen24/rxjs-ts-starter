import { ajax } from 'rxjs/ajax';

const data$ = ajax.getJSON('https://api.github.com/search/repositories?q=ruby-mqtt');

data$.subscribe(value => console.log('data$ value', value), err => console.error(err));

const dataGitLab$ = ajax.getJSON('https://gitlab.com/api/v4/projects?search=nodejs');

dataGitLab$.subscribe(value => console.log('dataGitLab$ value', value), err => console.error(err));