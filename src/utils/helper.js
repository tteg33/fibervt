import React, { Component } from 'react';


/*export const fileToDataUri = (files) => new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
                  resolve(event.target.result)};
          //if(files[0]){
          reader.readAsDataURL(target.files[0]);
});*/

export function fileToDataUri (files, event) {


    event.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
        return event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}




export const defaultUri = new URL('../../public/scene.glb', import.meta.url);

export * from './helper.js';
