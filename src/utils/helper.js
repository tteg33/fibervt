import React, { Component } from 'react';


export const fileToDataUri = (files, event) => new Promise((resolve, reject) => {
          const reader = new FileReader(event);
          reader.onload = (event) => {
                  resolve(event.target.result)};
          if(files[0]){
          reader.readAsDataURL(files[0]);}
});



export const defaultUri = new URL('../../public/scene.glb', import.meta.url);

export * from './helper.js';
