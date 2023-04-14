const { addNoteHandler, getAllNoteHandler, getNoteByHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'delete',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
