import React, { useState, useEffect } from 'react';
import { PlusCircle, Pencil, Trash2, Save, X, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { signIn, signOut, getSession } from '../lib/auth';
import { Session } from '@supabase/supabase-js';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
}

const Admin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    description: '',
    price: 0,
    image_url: ''
  });

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const session = await getSession();
      setSession(session);
      if (session) {
        fetchProducts();
      }
    } catch (err) {
      console.error('Error checking session:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    try {
      const { user } = await signIn(loginData.email, loginData.password);
      if (user) {
        setSession(await getSession());
        fetchProducts();
      }
    } catch (err) {
      setLoginError('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      setSession(null);
      setProducts([]);
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar los productos');
    }
  };

  const handleAddProduct = async () => {
    try {
      if (!newProduct.name || !newProduct.price || !newProduct.image_url) {
        throw new Error('Por favor completa todos los campos requeridos');
      }

      const { error } = await supabase
        .from('products')
        .insert([newProduct]);

      if (error) throw error;

      setNewProduct({
        name: '',
        description: '',
        price: 0,
        image_url: ''
      });
      
      await fetchProducts();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al agregar el producto');
    }
  };

  const handleUpdateProduct = async () => {
    if (!editingProduct) return;

    try {
      if (!editingProduct.name || !editingProduct.price || !editingProduct.image_url) {
        throw new Error('Por favor completa todos los campos requeridos');
      }

      const { error } = await supabase
        .from('products')
        .update(editingProduct)
        .eq('id', editingProduct.id);

      if (error) throw error;

      setEditingProduct(null);
      await fetchProducts();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al actualizar el producto');
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar este producto?')) return;

    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;

      await fetchProducts();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al eliminar el producto');
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <p className="text-xl text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-serif text-chocolate-dark mb-6 text-center">
            Iniciar Sesión
          </h1>
          {loginError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {loginError}
            </div>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-chocolate-dark text-white py-2 px-4 rounded-md hover:bg-chocolate-light transition-colors duration-300"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-serif text-chocolate-dark">Panel de Administración</h1>
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Cerrar Sesión
          </button>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Formulario para nuevo producto */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-serif text-chocolate-dark mb-4">Agregar Nuevo Producto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
              <input
                type="text"
                placeholder="Nombre del producto"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Precio *</label>
              <input
                type="number"
                placeholder="Precio"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL de la imagen *</label>
              <input
                type="text"
                placeholder="URL de la imagen"
                value={newProduct.image_url}
                onChange={(e) => setNewProduct({ ...newProduct, image_url: e.target.value })}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
              <textarea
                placeholder="Descripción"
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>
          <button
            onClick={handleAddProduct}
            className="mt-4 inline-flex items-center px-4 py-2 bg-chocolate-dark text-white rounded-md hover:bg-chocolate-light transition-colors duration-300"
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            Agregar Producto
          </button>
        </div>

        {/* Lista de productos */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Producto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Precio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4">
                    {editingProduct?.id === product.id ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={editingProduct.name}
                          onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                          className="px-2 py-1 border rounded-md w-full"
                          required
                        />
                        <input
                          type="text"
                          value={editingProduct.image_url}
                          onChange={(e) => setEditingProduct({ ...editingProduct, image_url: e.target.value })}
                          className="px-2 py-1 border rounded-md w-full"
                          placeholder="URL de la imagen"
                          required
                        />
                        <textarea
                          value={editingProduct.description}
                          onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                          className="px-2 py-1 border rounded-md w-full"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="h-16 w-16 object-cover rounded mr-4"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{product.name}</div>
                          <div className="text-gray-500">{product.description}</div>
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {editingProduct?.id === product.id ? (
                      <input
                        type="number"
                        value={editingProduct.price}
                        onChange={(e) => setEditingProduct({ ...editingProduct, price: parseInt(e.target.value) })}
                        className="px-2 py-1 border rounded-md"
                        required
                      />
                    ) : (
                      <div className="text-gray-900">${product.price.toLocaleString('es-CL')}</div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {editingProduct?.id === product.id ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={handleUpdateProduct}
                          className="text-green-600 hover:text-green-900"
                          title="Guardar cambios"
                        >
                          <Save className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => setEditingProduct(null)}
                          className="text-gray-600 hover:text-gray-900"
                          title="Cancelar edición"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setEditingProduct(product)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Editar producto"
                        >
                          <Pencil className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Eliminar producto"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;